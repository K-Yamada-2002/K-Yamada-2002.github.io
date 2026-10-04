const canTransition = typeof document.startViewTransition === "function";
let activeNavigation;
let destroyNetworkBackground = () => {};

document.documentElement.classList.add("js");

function isInternalPageLink(anchor) {
  if (!anchor || anchor.target || anchor.hasAttribute("download")) return false;
  if (anchor.origin !== window.location.origin) return false;
  if (anchor.pathname === window.location.pathname && anchor.hash) return false;
  return anchor.pathname.endsWith("/") || anchor.pathname.endsWith(".html");
}

async function loadPage(url, shouldPush = true) {
  activeNavigation?.abort();
  const navigation = new AbortController();
  activeNavigation = navigation;

  const response = await fetch(url, {
    headers: { "X-Requested-With": "fetch" },
    signal: navigation.signal,
  });
  navigation.signal.throwIfAborted();
  if (!response.ok) {
    window.location.href = url;
    return;
  }

  const html = await response.text();
  navigation.signal.throwIfAborted();
  const next = new DOMParser().parseFromString(html, "text/html");
  const nextSkipLink = next.querySelector(".skip-link");
  const nextHeader = next.querySelector(".site-header");
  const nextMain = next.querySelector("main");
  const nextFooter = next.querySelector(".site-footer");
  const nextDescription = next.querySelector('meta[name="description"]');

  if (!nextMain) {
    window.location.href = url;
    return;
  }

  const swap = () => {
    if (navigation.signal.aborted) return;
    document.title = next.title;
    document.documentElement.lang = next.documentElement.lang;
    document.body.className = next.body.className;

    const description = document.querySelector('meta[name="description"]');
    if (description && nextDescription) {
      description.content = nextDescription.content;
    }

    const skipLink = document.querySelector(".skip-link");
    if (skipLink && nextSkipLink) skipLink.textContent = nextSkipLink.textContent;

    if (nextHeader && document.querySelector(".site-header")) {
      document.querySelector(".site-header").innerHTML = nextHeader.innerHTML;
    }

    document.querySelector("main").replaceWith(nextMain);

    const currentFooter = document.querySelector(".site-footer");
    if (nextFooter && currentFooter) {
      if (currentFooter.innerHTML !== nextFooter.innerHTML) {
        currentFooter.innerHTML = nextFooter.innerHTML;
      }
    } else if (nextFooter) {
      document.body.append(nextFooter);
    } else if (currentFooter) {
      currentFooter.remove();
    }

    if (shouldPush) history.pushState(null, "", url);
    window.scrollTo({ top: 0, left: 0 });
    initNetworkBackground();
  };

  if (canTransition) {
    await document.startViewTransition(swap).finished;
  } else {
    swap();
  }

  if (navigation.signal.aborted) return;
  nextMain.focus({ preventScroll: true });
}

document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const anchor = event.target.closest("a");
  if (!isInternalPageLink(anchor)) return;

  event.preventDefault();
  loadPage(anchor.href).catch((error) => {
    if (error.name === "AbortError") return;
    window.location.href = anchor.href;
  });
});

window.addEventListener("popstate", () => {
  loadPage(window.location.href, false).catch((error) => {
    if (error.name === "AbortError") return;
    window.location.reload();
  });
});

function initNetworkBackground() {
  destroyNetworkBackground();

  const canvas = document.querySelector(".network-canvas");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const points = [];
  const pointCount = 72;
  let networkFrame = 0;

  const random = (seed) => {
    const value = Math.sin(seed * 12.9898) * 43758.5453;
    return value - Math.floor(value);
  };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    points.length = 0;

    for (let index = 0; index < pointCount; index += 1) {
      const column = index % 9;
      const row = Math.floor(index / 9);
      const x = rect.width * (0.04 + column * 0.115 + (random(index + 1) - 0.5) * 0.105);
      const y = rect.height * (0.08 + row * 0.105 + (random(index + 31) - 0.5) * 0.13);
      points.push({
        x,
        y,
        originX: x,
        originY: y,
        drift: 0.8 + (index % 9) * 0.16,
        phase: index * 0.61,
        orbit: 8 + random(index + 61) * 18,
        orbitY: 6 + random(index + 91) * 15,
      });
    }
  };

  const resizeObserver = new ResizeObserver(resize);

  const draw = (time = 0) => {
    const rect = canvas.getBoundingClientRect();
    context.clearRect(0, 0, rect.width, rect.height);

    const globalX = Math.cos(time * 0.00012) * 28 + Math.sin(time * 0.000055) * 18;
    const globalY = Math.sin(time * 0.0001) * 24 + Math.cos(time * 0.00007) * 14;

    for (const point of points) {
      const localX = Math.cos(time * 0.00031 * point.drift + point.phase) * point.orbit;
      const localY = Math.sin(time * 0.00027 * point.drift + point.phase * 1.3) * point.orbitY;
      const crossX = Math.sin(time * 0.00017 + point.phase) * 8;
      const crossY = Math.cos(time * 0.00015 + point.phase * 0.7) * 7;
      point.x = point.originX + globalX + localX + crossX;
      point.y = point.originY + globalY + localY + crossY;
    }

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const a = points[i];
        const b = points[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance > 155) continue;
        context.strokeStyle = `rgba(17, 17, 17, ${0.16 * (1 - distance / 155)})`;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.stroke();
      }
    }

    for (const point of points) {
      context.fillStyle = "rgba(17, 17, 17, 0.36)";
      context.beginPath();
      context.arc(point.x, point.y, 1.75, 0, Math.PI * 2);
      context.fill();
    }

    if (!prefersReducedMotion) {
      networkFrame = window.requestAnimationFrame(draw);
    }
  };

  resize();
  resizeObserver.observe(canvas);
  draw();

  destroyNetworkBackground = () => {
    window.cancelAnimationFrame(networkFrame);
    resizeObserver.disconnect();
    destroyNetworkBackground = () => {};
  };
}

document.addEventListener("DOMContentLoaded", initNetworkBackground);

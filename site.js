const canTransition = typeof document.startViewTransition === "function";

function isInternalPageLink(anchor) {
  if (!anchor || anchor.target || anchor.hasAttribute("download")) return false;
  if (anchor.origin !== window.location.origin) return false;
  if (anchor.pathname === window.location.pathname && anchor.hash) return false;
  return anchor.pathname.endsWith("/") || anchor.pathname.endsWith(".html");
}

async function loadPage(url, shouldPush = true) {
  const response = await fetch(url, { headers: { "X-Requested-With": "fetch" } });
  if (!response.ok) {
    window.location.href = url;
    return;
  }

  const html = await response.text();
  const next = new DOMParser().parseFromString(html, "text/html");
  const nextHeader = next.querySelector(".site-header");
  const nextMain = next.querySelector("main");
  const nextFooter = next.querySelector(".site-footer");

  if (!nextMain) {
    window.location.href = url;
    return;
  }

  const swap = () => {
    document.title = next.title;
    document.body.className = next.body.className;

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

    window.scrollTo({ top: 0, left: 0 });
  };

  if (canTransition) {
    await document.startViewTransition(swap).finished;
  } else {
    swap();
  }

  if (shouldPush) {
    history.pushState(null, "", url);
  }
}

document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const anchor = event.target.closest("a");
  if (!isInternalPageLink(anchor)) return;

  event.preventDefault();
  loadPage(anchor.href).catch(() => {
    window.location.href = anchor.href;
  });
});

window.addEventListener("popstate", () => {
  loadPage(window.location.href, false).catch(() => {
    window.location.reload();
  });
});

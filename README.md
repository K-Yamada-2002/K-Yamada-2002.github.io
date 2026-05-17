# K-Yamada-2002.github.io

山田航輝 / Koki Yamada の公式サイトです。GitHub Pages標準に近いJekyll構成で、MarkdownとYAMLから静的HTMLを生成します。

## Content

基本的に日常的な更新は `content/` の中だけを編集します。

- `content/_notes/*.md`: 数学ノート記事
- `content/_notes_en/*.md`: 英語版の数学ノート記事
- `content/_essays/*.md`: 雑記記事
- `content/_essays_en/*.md`: 英語版の雑記記事
- `content/_data/career.yml`: 経歴
- `content/_data/projects.yml`: ツール・プロジェクト
- `content/_data/nav.yml`: 日英ナビゲーション
- `_layouts/`, `_includes/`: 共通レイアウト
- `styles.css`: サイト全体のスタイル
- `site.js`: 内部ページ遷移とトップ背景

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

生成後の主要URLは `/`, `/en/`, `/research/`, `/notes/`, `/projects/`, `/essays/`, `/career/` です。

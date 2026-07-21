# 基本文法ハンドブック - スマートフォン版（試作品）

PDFの表紙と、5ページに同居していた「受け身」「助動詞」を1テーマずつ表示する静的Webサイトです。APIキー、外部ライブラリ、ビルド作業は不要です。

## ファイル

- `index.html`：ページ本体
- `style.css`：スマートフォン対応のデザイン
- `script.js`：メニューと画像拡大表示
- `assets/`：PDFから切り出した教材画像

## 手元で確認する

`index.html` をダブルクリックするとブラウザで開けます。

## GitHub Pagesで公開する（初心者向け）

1. GitHubにログインし、右上の「+」から「New repository」を選びます。
2. Repository nameに好きな名前（例：`english-grammar-mobile`）を入力します。
3. 「Public」を選び、「Create repository」を押します。
4. 作成したリポジトリで「Add file」→「Upload files」を押します。
5. このフォルダの中にある `index.html`、`style.css`、`script.js`、`assets` フォルダをアップロードします。フォルダそのものを一段余分に入れず、`index.html` がリポジトリ直下に見える状態にしてください。
6. 画面下の「Commit changes」を押します。
7. リポジトリ上部の「Settings」→左側の「Pages」を開きます。
8. 「Build and deployment」のSourceを「Deploy from a branch」にします。
9. Branchを `main`、フォルダを `/(root)` にして「Save」を押します。
10. 数分待ってPages画面を再読み込みすると、公開URLが表示されます。

公開後に直す場合は、対象ファイルを再度アップロードして「Commit changes」を押します。通常は数分で公開ページにも反映されます。

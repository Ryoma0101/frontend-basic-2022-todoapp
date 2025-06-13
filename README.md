# Frontend Basic 2022 Todo アプリ

このプロジェクトは、Frontend Basic 2022 研修用に作成されたシンプルな Todo アプリです。React と styled-components を採用し、Atomic Design に基づいてコンポーネントを構築しています。開発環境は Webpack と Babel で整えられています。

## 開発環境のセットアップ

1. 依存パッケージのインストール

```bash
yarn install
```

2. 開発サーバーの起動

```bash
yarn dev
```

Webpack Dev Server が立ち上がり、ブラウザが自動で開きます。

3. 本番ビルドの作成

```bash
yarn build
```

生成物は `public` ディレクトリに出力されます。

## Storybook

UI コンポーネントのドキュメントとして Storybook を利用しています。

- Storybook をローカルで起動

```bash
yarn sb
```

- Storybook の静的ファイルをビルド

```bash
yarn build-storybook
```

ビルドされたファイルは `storybook-static` に配置されます。

## デプロイ手順

### GitHub Pages

GitHub Actions でプロジェクトをビルドし、`public` ディレクトリの内容を GitHub Pages に公開します。デフォルトブランチへ push するとワークフローが実行されます。

### Chromatic

Storybook を Chromatic に公開する場合は、次のコマンドを実行します。

```bash
yarn chromatic
```

## 主要ディレクトリ構成

```
frontend-basic-2022-todoapp/
├── public/                 # 静的ファイルとビルド成果物
├── src/
│   ├── assets/             # 画像などのアセット
│   ├── components/         # Atomic Design 準拠のコンポーネント
│   │   ├── Atoms/
│   │   ├── Molecules/
│   │   ├── Organisms/
│   │   └── Pages/
│   ├── variables/          # スタイル変数
│   ├── style.css           # グローバルスタイル
│   └── index.jsx           # エントリーポイント
└── .storybook/             # Storybook 設定
```

コンポーネントは **Atomic Design** の考え方で分類されています。

- **Atoms**: ボタンや入力フィールドなど最小単位のパーツ
- **Molecules**: 複数の Atom を組み合わせた `Task` コンポーネントなど
- **Organisms**: いくつかの Molecule をまとめた `TodoCard` など
- **Pages**: Organism を配置した画面例 (例: `MainPage`)

各コンポーネントの隣に `*.stories.jsx` を配置し、Storybook から閲覧できるようにしています。

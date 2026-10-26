# レンタルスペース開業スタイル診断アプリ

レンタルスペースの開業を検討している潜在顧客向けのTinder風スワイプ診断アプリ（React + TypeScript + Tailwind CSS + Framer Motion）です。
10問の直感的な「はい（右スワイプ）」「いいえ（左スワイプ）」の質問から5つの評価軸をスコアリングし、全9タイプの開業スタイルへ振り分けて公式LINE登録（リード獲得）へ誘導します。

## 技術スタック
- **フレームワーク**: React 18 + Vite + TypeScript（完全フロントエンド完結型SPA）
- **スタイリング**: Tailwind CSS（モバイルファースト設計）
- **アニメーション**: Framer Motion（Tinder風カードスワイプ・スタンプ表示・画面遷移）
- **デプロイ先想定**: Cloudflare Pages

## ローカルでの起動方法

```bash
# パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番用ビルド（distフォルダに出力されます）
npm run build
```

## 公式LINEのURL変更方法
[`src/components/ResultScreen.tsx`](src/components/ResultScreen.tsx) の上部にある定数 `OFFICIAL_LINE_URL` を、ご自身の公式LINE友だち追加URL（Lステップやエルメの計測URLなど）に書き換えてください。

```ts
const OFFICIAL_LINE_URL = 'https://line.me/R/ti/p/@あなたのLINE_ID';
```

## Cloudflare Pages へのデプロイ設定
1. GitHubリポジトリにプッシュし、Cloudflare Dashboard > **Workers & Pages** > **Pages** からリポジトリを接続します。
2. ビルド設定を以下のように指定します：
   - **フレームワーク プリセット**: `Vite`
   - **ビルド コマンド**: `npm run build`
   - **ビルド出力ディレクトリ**: `dist`
   - **環境変数**: `NODE_VERSION` = `20`

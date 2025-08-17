# きあらちゃんをさがせ / kiasaga

RPG ゲーム「きあらちゃんをさがせ」の紹介サイトです。

## 概要

このサイトは、=LOVE（イコールラブ）のオマージュRPGゲーム「きあらちゃんをさがせ」を紹介する1ページのWebサイトです。

### ゲームについて
- ライブ会場で行方不明になった齋藤樹愛羅ちゃんを、佐々木舞香ちゃんが主人公となって探すミニ謎ときRPG
- 実際のゲーム: https://pyxel-rpg-looking-for-kiara-chan.vercel.app/
- ソースコード: https://github.com/kikutaro/Pyxel_RPG_Looking_For_Kiara-Chan

## サイトの特徴

### デザイン
- 子供にもわかりやすい可愛らしいデザイン
- ピンクをメインとした配色
- ドット絵フォント（DotGothic16、Pixelify Sans）を使用
- ゲームらしい楽しい演出（浮遊パーティクル、アニメーション等）

### 機能
- **レスポンシブデザイン**: スマートフォン、タブレット、デスクトップに対応
- **多言語対応**: 日本語・英語の切り替え機能
- **スムーズなUI**: パララックス効果、ホバーアニメーション等

### サイト構成
1. **ヒーローヘッダー**: サイト名とゲーム画面を50%ずつ表示
2. **プレイセクション**: ゲームへのリンクボタン
3. **ストーリーセクション**: ゲームの背景説明
4. **遊び方セクション**: 操作方法の説明
5. **キャラクターセクション**: 登場人物の紹介
6. **特徴セクション**: ゲームの魅力を箇条書きで紹介
7. **フッター**: コピーライト情報

## 使用技術

- **HTML5**: セマンティックなマークアップ
- **CSS3**: グリッドレイアウト、アニメーション、レスポンシブデザイン
- **JavaScript**: 言語切り替え、インタラクション機能
- **Web Fonts**: Google Fonts（DotGothic16、Pixelify Sans）

## セットアップ

### 必要な環境
- モダンなWebブラウザ
- HTTPサーバー（開発時）

### 実行方法

```bash
# シンプルなHTTPサーバーで起動
python3 -m http.server 8000

# または Node.js の場合
npx serve .

# ブラウザで http://localhost:8000 にアクセス
```

## ファイル構成

```
/
├── index.html          # メインHTML
├── styles.css          # スタイルシート
├── script.js           # JavaScript機能
└── README.md           # このファイル
```

## ブラウザサポート

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 制作者

- サイト制作: AI Assistant
- ゲーム制作: [kikutaro](https://github.com/kikutaro)
- オマージュ元: =LOVE（イコールラブ）

---

## About (English)

This is an introduction website for the RPG game "kiasaga" (Looking for Kiara-chan).

### Game Overview
- A mini mystery RPG where Maika Sasaki searches for the missing Kiara Saito at a live concert venue
- Play the game: https://pyxel-rpg-looking-for-kiara-chan.vercel.app/
- Source code: https://github.com/kikutaro/Pyxel_RPG_Looking_For_Kiara-Chan

### Features
- Child-friendly cute design with pink color scheme
- Pixel art fonts and game-like animations
- Responsive design for all devices
- Japanese/English language switching
- Single-page layout with smooth scrolling

### Technology Stack
- HTML5, CSS3, JavaScript
- Web fonts and modern CSS features
- Mobile-first responsive design

# 🧵 レース糸管理アプリ

Vue 3 + Vite + TypeScript + Firebase Firestore を使った  
シンプルなレース糸在庫管理アプリです。

---

## 🚀 機能
- レース糸の新規登録（ブランド / 色番 / 太さ / 残量 / メモ / 画像URL）
- Firestore に保存
- 一覧表示（カードビュー）
- 削除機能
- Firebase Hosting にデプロイ

---

## 🛠 技術スタック
- [Vue 3](https://vuejs.org/) (Composition API)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## 📂 プロジェクト構成

```

src/
├─ components/
│   ├─ Home.vue       # 在庫一覧 & 削除
│   ├─ AddYarn.vue    # 新規登録フォーム
│   └─ YarnCard.vue   # 1玉表示カード
├─ firebase.js        # Firebase 初期化
├─ shims-vue.d.ts     # Vue 型定義
├─ App.vue
└─ main.ts

````

---

## ⚙️ セットアップ

### 1. クローン & 依存関係インストール
```bash
git clone <this-repo>
cd lace-yarn-app
npm install
````

### 2. Firebase 設定

`src/firebase.js` に Firebase Console から取得した設定を書き込む：

```js
const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx.firebaseapp.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "xxx",
  appId: "xxx"
};
```

### 3. 開発サーバー起動

```bash
npm run dev
```

### 4. ビルド

```bash
npm run build
```

---

## 🌍 デプロイ（Firebase Hosting）

1. Firebase CLI をインストール & ログイン

```bash
npm install -g firebase-tools
firebase login
```

2. Hosting 初期化

```bash
firebase init hosting
```

* public dir → `dist`
* SPA rewrite → Yes

3. デプロイ

```bash
firebase deploy
```



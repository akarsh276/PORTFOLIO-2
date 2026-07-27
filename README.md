# Akarsh Shukla — Portfolio

A professional developer portfolio built with React + Vite.

---

## 🚀 Run Locally in VS Code

### Step 1 — Open in VS Code
Unzip the folder and open it in VS Code.

### Step 2 — Install dependencies
Open the terminal in VS Code (`Ctrl + \``) and run:
```
npm install
```

### Step 3 — Start the dev server
```
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deploy on GitHub Pages

### Step 1 — Create a GitHub repo
Go to github.com → New Repository → name it `portfolio` (or anything you like).

### Step 2 — Push your code
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3 — Install gh-pages
```
npm install --save-dev gh-pages
```

### Step 4 — Add deploy scripts to package.json
Open `package.json` and update the `"scripts"` section:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Also add this line at the top level of `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO"
```

### Step 5 — Deploy
```
npm run deploy
```

Your portfolio will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO`

---

## ✏️ Customize Your Data

All personal info (name, skills, projects, etc.) is in one place:

```
src/App.jsx  →  const data = { ... }  (top of file)
```

Just edit the `data` object — no need to touch any UI code.

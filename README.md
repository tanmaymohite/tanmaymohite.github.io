# Premium React Student Portfolio (Solarized Dark Theme)

Welcome to your new developer-centric personal portfolio! This website is built using **React**, styled from scratch using **Vanilla CSS Variables** (for maximum performance and layout customizability), and is fully configured for seamless, one-command deployment to **GitHub Pages**.

## Key Features

*   **Solarized Dark Theme**: Implementation of the authentic Solarized Dark palette blended with responsive modern surfaces (glassmorphism overlays and custom animations).
*   **Dynamic Data Configuration**: Content on the **Projects** and **Blogs** pages is loaded dynamically from configuration files (`src/data/projects.json` and `src/data/blogs.json`). To update your site, you only need to edit these JSON files!
*   **Responsive Shell**: Built with flexible layouts, liquid grids, and responsive sidebar menus that scale cleanly across desktops, tablets, and mobile devices.
*   **Built-in Article Reader**: Blogs feature an inline modal viewer allowing readers to load and read full articles directly on-page.
*   **GitHub Pages Ready**: Out-of-the-box support for the standard `gh-pages` publishing scripts.

---

## Getting Started: Local Development

### 1. Prerequisites
Ensure you have **Node.js** (v16.0.0 or higher) and **npm** installed on your computer. You can download them from [nodejs.org](https://nodejs.org/).

### 2. Install Dependencies
Clone or download this repository, open your terminal within the project directory, and run the following command to download React and the icon packages:
```bash
npm install
```

### 3. Run the Development Server
Launch the local environment:
```bash
npm start
```
The browser will automatically open your portfolio at `http://localhost:3000`. Any edits you save in the code will hot-reload instantly.

---

## Customizing Your Information

Instead of diving deep into React code, you can customize your portfolios by editing the simple JSON structures inside the `src/data` folder:

### Projects (`src/data/projects.json`)
Add or remove objects in this array. Each project accepts:
*   `id` (unique slug string)
*   `title` (display title)
*   `description` (detailed summary)
*   `techStack` (array of technologies e.g. `["React", "Node.js"]`)
*   `githubLink` (optional link to your repository)
*   `liveLink` (optional live preview URL)
*   `category` (e.g. `Web Applications`, `CLI Tools`, `Libraries`)
*   `featured` (boolean - set to `true` to showcase this project directly on your Home screen!)

### Blogs (`src/data/blogs.json`)
Publish tech logs or notes:
*   `id` (unique slug string)
*   `title` (article heading)
*   `date` (e.g. `"May 23, 2026"`)
*   `readTime` (e.g. `"5 min read"`)
*   `tags` (categories e.g. `["CSS", "Go"]`)
*   `summary` (short excerpt shown in the list)
*   `content` (the complete article body. Separate paragraphs with a double newline `\n\n` for proper visual formatting in the viewer).

---

## Deploying to GitHub Pages (`gh-pages`)

Since this repository is named `tanmaymohite.github.io` (a user portfolio site), deploying is extremely simple! Follow these steps to host it for free on GitHub:

### Step 1: Update your Homepage URL
Open `package.json` and confirm or update the `"homepage"` key:
```json
"homepage": "https://tanmaymohite.github.io"
```
*(If your repository name is different, use `https://<username>.github.io/<repository-name>`)*

### Step 2: Initialize Git
If you haven't initialized Git in your folder yet, run:
```bash
git init
git add .
git commit -m "feat: initial commit of react portfolio"
```

### Step 3: Link to your GitHub Repository
Create an empty repository on GitHub named `tanmaymohite.github.io` and add it as a remote to your local git setup:
```bash
git remote add origin https://github.com/tanmaymohite/tanmaymohite.github.io.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy with One Command!
To build the application in production mode and automatically publish the static output to your `gh-pages` branch, run:
```bash
npm run deploy
```

### Step 5: Configure GitHub Settings
1. Go to your repository page on **GitHub.com**.
2. Click on **Settings** (gear icon) -> **Pages** in the left-hand sidebar.
3. Under **Build and deployment**, ensure the **Source** is set to **Deploy from a branch**.
4. Choose the **`gh-pages`** branch and click **Save**.

Your portfolio website will go live at **`https://tanmaymohite.github.io`** within a couple of minutes!

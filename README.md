# 🚀 High-Performance React + Shadcn Project

This project is a modern, static-site application built for speed and developer experience.

## ✨ Core Tooling & Architecture

This application is built on a robust, high-performance stack:

| Component | Technology | Purpose |
| ----- | ----- | ----- |
| **Framework** | **React** + **Vite** | Modern, fast front-end development and bundling. |
| **Styling** | **Tailwind CSS** + **shadcn/ui** | Utility-first styling with high-quality, accessible UI components. |
| **Language** | **TypeScript** | Static typing for improved code quality and maintainability. |
| **Optimization** | **Bun** | Fast dependency management and lock file handling. |

The deployed site is optimized for performance, using best practices to achieve high scores on Google's [**PageSpeed Insights**](https://developers.google.com/speed/pagespeed/insights/) platform.

## ⚙️ Development & Build Commands (via `make`)

We use a `Makefile` to simplify common development and build tasks. You only need to run the `make` command, rather than complex `npm` or `bun` scripts.

| Command | Action | Raw Command | Description |
| :--- | :--- | :--- | :--- |
| `make start` | Start Dev Server | `npm run dev` | Runs Vite's development server. |
| `make build` | Production Build | `npm run build` | Compiles and optimizes the project for deployment. |
| `make preview` | Local Preview | `npm run preview` | Serves the production build artifact locally. |
| `make lint` | Check Code Quality | `npm run lint` | Runs the linter across all source files. |
| `make clean` | Cleanup | `rm -rf dist` | Deletes the build output directory. |
| `make install` | Install/Update Deps | `bun install` | Fetches dependencies and updates the lock file. |

### 🚨 Critical Warning: Lock File Maintenance

The project uses **Bun** for dependency locking, which is significantly faster than npm/yarn.

**Always run `make install` or `bun install` immediately after cloning or pulling changes.** Failure to update your local `bun.lockb` file can cause build errors on CI/CD platforms like Cloudflare Pages due to frozen lockfile policies.

## 💻 Working Locally

To set up the project on your machine:

```sh
# 1. Clone the repository.
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Install dependencies and ensure the lock file is current.
make install

# 3. Start development.
make start
``` 

## 🚀 Deployment

The project is hosted on **Cloudflare Pages**, utilizing its integrated Continuous Deployment (CD) pipeline. Any push to the main branch automatically triggers a new build and deployment.

**Deployment URL**: The live, optimized website is available at: https://drageisa.com.br

**Custom Domain Setup**: To manage or connect a custom domain, refer to the **Domains** section within your Cloudflare Pages project settings.
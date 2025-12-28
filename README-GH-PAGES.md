Deploying the Pinewood site to GitHub Pages

This repo contains a static site in the `pinewood-site` folder.

What I added:
- `.github/workflows/deploy.yml` — GitHub Actions workflow that publishes the `pinewood-site` folder to the `gh-pages` branch whenever you push to `main`.

How to publish (copy/paste):
1. Commit and push the new workflow and any local changes:

```powershell
cd 'C:\Users\Phoenix\Documents\GitHub\pam-site'
git add .github/workflows/deploy.yml
git add pinewood-site
git commit -m "Add GH Actions deploy for Pinewood site"
git push origin main
```

2. Wait a minute for the GitHub Actions workflow to run. It will create/update the `gh-pages` branch.

3. Your site will be available at:

https://thepheonixgodllc.github.io/pam-site/

Notes and tips:
- If your repository name or owner differs, replace the URL accordingly.
- If you prefer the site served from the repository root (without `/pam-site/`), we can rearrange files so `index.html` is at the repo root before deploying.
- If you'd like, I can also add a minimal CI check (linting) or tweak styles before you deploy.

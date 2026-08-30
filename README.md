# tanaychitlur.com

Personal portfolio site, published with GitHub Pages.

## What goes where

- `index.html` — home page (about, research list, contact)
- `projects/` — one page per project (EMBC, Sensors, HRS, ISEF 2024, ISEF 2025, AI Med)
- `files/` — put ALL your PDFs here, using the exact names from Google Drive plus `.pdf`:
  - embc-2025-paper.pdf, embc-2025-presentation.pdf
  - sensors-2025-paper.pdf, sensors-2025-poster.pdf
  - hrs-2024-abstract.pdf, hrs-2024-poster.pdf
  - isef-2024-abstract.pdf, isef-2024-poster.pdf
  - isef-2025-abstract.pdf, isef-2025-poster.pdf
  - ai-med-2023-abstract.pdf, ai-med-2023-presentation.pdf, ai-med-2023-award.pdf
  - tanay-chitlur-resume.pdf (already included)
- `images/profile.jpg` — add a square-ish photo of yourself with exactly this name
- `CNAME` — tells GitHub Pages your custom domain (already set to tanaychitlur.com)

## Publish (one time setup)

1. Create a GitHub account if you don't have one, then create a new **public**
   repository named `portfolio` (any name works).
2. On the empty repo page, click "uploading an existing file", drag in the
   ENTIRE contents of this folder (not the folder itself — index.html must be
   at the top level of the repo), and commit.
3. Repo → Settings → Pages → under "Build and deployment", set Source to
   "Deploy from a branch", Branch: `main`, folder `/ (root)`. Save.
4. Wait 1–2 minutes; the site is live at `https://YOUR-USERNAME.github.io/portfolio/`.

## Connect tanaychitlur.com

1. At your domain registrar (wherever you bought tanaychitlur.com), add these
   DNS records:
   - Four **A records** for host `@` pointing to:
     185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - One **CNAME record** for host `www` pointing to `YOUR-USERNAME.github.io`
2. Repo → Settings → Pages → Custom domain → enter `tanaychitlur.com` → Save.
3. Once the DNS check passes (can take a few minutes to a few hours), tick
   **Enforce HTTPS**.

## Updating later

To add or replace a PDF, go to the `files/` folder on GitHub → "Add file" →
"Upload files". To edit text, open the HTML file on GitHub and click the
pencil icon. Every commit republishes the site automatically in ~1 minute.

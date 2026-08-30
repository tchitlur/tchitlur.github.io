# tanaychitlur.github.io

Personal research portfolio. Plain HTML and CSS — no build step, no dependencies.

## Structure

```
index.html                  Home: about, research list, experience, awards, contact
projects/                   One page per project group
  embc-2025.html
  sensors-2025.html
  isef-2025-intellicane.html
  isef-2024.html
  hrs-2024.html
  ai-med-2023.html
assets/css/style.css        All styling for every page
assets/js/ecg.js            Draws the 12-lead ECG on the home page
files/<project>/            The PDFs for that project
files/resume/               Résumé
.nojekyll                   Tells GitHub Pages to serve the files as-is
```

## Replace the placeholder PDFs

Every file in `files/` right now is a placeholder. Swap in the real PDF from Google Drive
and **keep the filename exactly the same** — that is what the links point to.

| Google Drive file | Goes here |
|---|---|
| 01_EMBC 2025 - Paper | `files/embc-2025/embc-2025-paper.pdf` |
| 02_EMBC 2025 - Presentation | `files/embc-2025/embc-2025-presentation.pdf` |
| 03_SENSORS 2025 - Paper | `files/sensors-2025/sensors-2025-paper.pdf` |
| 04_SENSORS 2025 - Poster | `files/sensors-2025/sensors-2025-poster.pdf` |
| 05_ISEF 2024 - Poster | `files/isef-2024/isef-2024-poster.pdf` |
| 06_ISEF 2024 - Abstract | `files/isef-2024/isef-2024-abstract.pdf` |
| 07_HRS 2024 - Poster | `files/hrs-2024/hrs-2024-poster.pdf` |
| 08_HRS 2024 - Abstract | `files/hrs-2024/hrs-2024-abstract.pdf` |
| 09_AI-Med 2023 - Presentation | `files/ai-med-2023/ai-med-2023-presentation.pdf` |
| 10_AI-Med 2023 - Abstract | `files/ai-med-2023/ai-med-2023-abstract.pdf` |
| 11_AI-Med 2023 - Award | `files/ai-med-2023/ai-med-2023-award.pdf` |
| IntelliCane poster | `files/isef-2025-intellicane/isef-2025-poster.pdf` |
| IntelliCane abstract | `files/isef-2025-intellicane/isef-2025-abstract.pdf` |

If a document does not exist, delete its `<li class="doc">` block on the project page and
its link on `index.html`, rather than leaving a dead link.

## Fill in the URLs

Search the files for these placeholders and replace each one with a real link:

- `REPLACE_WITH_GOOGLE_SCHOLAR_URL` — home page hero, home page footer, and every project footer
- `REPLACE_WITH_IEEE_XPLORE_URL` — `projects/embc-2025.html`, `projects/sensors-2025.html`
- `REPLACE_WITH_PUBMED_URL` — `projects/embc-2025.html`

Find them all at once from the repo folder:

```
grep -rn "REPLACE_WITH" .
```

## Add a new project

1. Copy an existing file in `projects/` and rename it.
2. Edit the title, the eyebrow line, the `<dl class="facts">` sidebar, the paragraphs, and the
   `<li class="doc">` rows.
3. Make a matching folder under `files/` and put the PDFs in it.
4. Add an `<div class="entry">` block to the research list on `index.html`, copying one that is
   already there.
5. Update the Previous / Next links at the bottom of the neighbouring project pages.

## Preview locally

Double-clicking `index.html` works. To be closer to the real thing:

```
cd portfolio-site
python3 -m http.server 8000
```

Then open http://localhost:8000

## Publish

Push to a repo named `<your-github-username>.github.io`, then in
Settings → Pages set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
The site goes live at `https://<your-github-username>.github.io` within a minute or two.

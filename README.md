# Skin & Hair by Dr. Vidhya — CCG Digital Gateway

Static site (HTML/CSS/JS). No build step, no external dependencies (fonts are self-hosted).

```
index.html   page markup (2 panels)
style.css    all styling
links.js     ALL link destinations — edit here only
script.js    applies links.js to the buttons
assets/      logo, portrait, button artwork
fonts/       self-hosted fonts
netlify.toml Netlify settings
```

## Add the Explore website link
Open `links.js`, put the clinic website URL inside the quotes of `explore: ""`, save, commit. The "Website link coming soon" note disappears automatically.

## GitHub
1. github.com → New repository (e.g. `dr-vidhya-ccg`), leave empty.
2. "uploading an existing file" → drag in the CONTENTS of this folder (index.html at the top level, not inside a sub-folder) → Commit.

## Netlify
1. app.netlify.com → Add new site → Import an existing project → GitHub → authorise → pick the repo.
2. Build command: leave empty. Publish directory: `.` → Deploy.
3. Optional: Site configuration → Change site name / add a custom domain.

## Updating later
Edit the file on GitHub (pencil icon) or upload replacements → Commit. Netlify redeploys automatically.

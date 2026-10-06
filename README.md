# Your Portfolio — Setup Guide

## Folder structure
```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
└── assets/
    ├── video/bg-loop.mp4     ← your background video goes here
    ├── profile/profile.jpg   ← your photo goes here
    └── projects/project-01.jpg ... project-06.jpg  ← your project images
```

## 1. Add your background video
Drop a short (10–20 second), tech-related looping video at:
`assets/video/bg-loop.mp4`

Free sources (check each clip's license):
- pexels.com/videos
- coverr.co
- mixkit.co

Keep the file small (ideally under 8MB) so the hero loads fast. Also add a
still frame as `assets/video/poster.jpg` — it shows for a split second while
the video loads.

## 2. Add your photo and project images
Replace the placeholder file names in `assets/profile/` and
`assets/projects/` with your own images (same file names, or update the
`src` paths in `index.html` to match).

## 3. Update your info
In `index.html`, replace:
- `Your Name` and the hero headline/copy
- `you@example.com` (appears twice)
- LinkedIn / Behance / Dribbble / Instagram links
- Each project's `href` (point to the live site, Behance case study, or
  Dribbble shot) and its title/category text

Every project image is wrapped in a link with `target="_blank"`, so clicking
it opens that project in a new tab automatically — no extra JS needed.

## 4. Preview it
Just open `index.html` in your browser — no build step required.

## 5. Host it
Any static host works, for example:
- **GitHub Pages** — push this folder to a repo, enable Pages in settings
- **Netlify / Vercel** — drag-and-drop the folder to deploy

## Notes on the code
- Bootstrap 5 handles the grid, navbar and buttons.
- `css/style.css` holds all custom styling — colors are defined once at the
  top as CSS variables (`:root`), so you can re-theme the whole site by
  editing those few lines.
- `js/script.js` handles three small effects: the navbar background on
  scroll, the fade-up reveal as sections enter view, and closing the mobile
  menu after a click.

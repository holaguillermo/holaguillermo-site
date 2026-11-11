# holaguillermo.com

Static site. No build step: every file here is served as-is.

- `index.html` — art side (`/`)
- `content/pieces.js` — the work on the art page: order, photos, alt text, captions
- `img/` — web images (900px grid, 2000px viewer, `-lg`)
- `assets/` — paper and ink textures, maker's mark

To add a piece: put web images in `img/`, add an entry to `content/pieces.js`, commit. Hosting deploys on push.

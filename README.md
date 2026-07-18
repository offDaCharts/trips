# Trip Planning HQ

A static research and comparison site for family trip ideas, with bookable trip overviews, day-by-day detail pages, route maps, local imagery, and a standalone Austria video field guide.

## Website

[https://offdacharts.github.io/trips/](https://offdacharts.github.io/trips/)

GitHub Pages deploys automatically from `main` using the workflow in `.github/workflows/pages.yml`.

## Local preview

Serve the repository root so the app and data folders share the same origin:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Then open [http://localhost:8000/app/](http://localhost:8000/app/).

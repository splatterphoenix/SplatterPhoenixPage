# Splatter Phoenix website

First-pass Astro website for Splatter Phoenix, an alternative pop punk band from Richmond, Virginia.

## Development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

The static build is written to `dist/` and is suitable for Cloudflare Pages.

## Content notes

- Confirm the public booking email before launch.
- Replace placeholder cover treatments for `Cute on Blaire` and `Heck Yes` when final artwork is supplied.
- Add confirmed upcoming dates and full member roles/bios.
- Add photographer credits and package high-resolution press downloads.

## Updating shows and media

- Add, remove, or reorder show dates in `src/data/shows.ts`.
- Add, reorder, or hide gallery images in `src/data/media.ts`.
- Put new optimized image files in `public/images/` and reference their `/images/...` path in the media data file.
- See `CONTENT-UPDATES.md` for the exact post-launch GitHub and Cloudflare workflow.

## Contact form

The contact form is wired for Web3Forms. Create an access key at `https://web3forms.com/`, copy `.env.example` to `.env`, and set:

```sh
PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key
```

The submit button stays disabled until the key is present.

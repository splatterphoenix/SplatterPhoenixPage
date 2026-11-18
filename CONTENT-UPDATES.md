# Updating shows and gallery images

Once the site is connected to GitHub and Cloudflare Pages, content updates can be made directly in GitHub. Every commit to the production branch will trigger a fresh Cloudflare deployment automatically.

## Add or change an upcoming show

Open `src/data/shows.ts` in GitHub and edit the `upcomingShows` list:

```ts
export const upcomingShows: Show[] = [
  {
    date: '2027-02-14',
    displayDate: 'Feb 14 · 2027',
    venue: 'The Venue Name',
    city: 'Richmond, VA',
    details: 'With Band One and Band Two',
    ticketUrl: 'https://example.com/tickets',
  },
];
```

- `date` must use `YYYY-MM-DD`.
- `details` and `ticketUrl` are optional.
- Move completed dates from `upcomingShows` into `pastShows`.
- Commit the change in GitHub. Cloudflare will rebuild the site.

## Add a gallery image

1. Upload the optimized JPG, PNG, AVIF, or WebP file to `public/images/` in GitHub.
2. Open `src/data/media.ts`.
3. Add an entry to `mediaImages`:

```ts
{
  src: '/images/new-photo.jpg',
  alt: 'Splatter Phoenix performing at Venue Name',
  layout: 'wide',
}
```

Use `wide`, `tall`, or `standard` for the layout. Reorder the entries to reorder the gallery. Add `visible: false` to hide an image without deleting it.

## Editing options after launch

The first launch will use the GitHub workflow above. It is simple, versioned, and does not require a separate database. If the band later wants a visual admin screen, the same data can be moved to a small CMS such as Decap CMS or Sanity without redesigning the public pages.

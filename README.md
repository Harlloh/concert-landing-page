# Asher Praise Concert website

## Updating the event

Edit [`src/data/event.js`](./src/data/event.js) when preparing a new edition. The homepage, countdown, registration, volunteer, playlist, event metadata, and event partner section read their changing details from `currentEvent`:

- Update the edition, year, theme, date (`YYYY-MM-DD`), time, venue, location, and directions.
- Replace the hero image and update its alt text, caption, and invitation.
- Set registration to `open` or `closed`, update its price and open/closed labels and endpoint, and update the volunteer and prayer endpoints if needed.
- Update the ministers, playlist tracks, and event partners for the new edition.

The date labels are formatted from the ISO date, so there is no separate date string to keep in sync. After the previous edition is complete, update `archive` in the same file with its year, gallery images, video, and homepage photos.

Assets used by the event configuration are in `public/images` or `src/assets`. Audio and partner assets are resolved from `src/assets` by the configuration module.

## Development

```sh
npm install
npm run dev
npm test
npm run lint
npm run build
```

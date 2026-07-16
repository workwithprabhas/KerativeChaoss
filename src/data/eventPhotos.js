/* Event photos.
 * Drop any images into src/assets/events/ (.jpg / .png / .webp) and they show up
 * on the /events/photos page automatically — no code changes needed.
 * Kept separate from the main Gallery. */
const modules = import.meta.glob(
  '../assets/events/*.{JPG,jpg,jpeg,JPEG,png,PNG,webp}',
  { eager: true, query: '?url', import: 'default' }
)

export const eventPhotos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)

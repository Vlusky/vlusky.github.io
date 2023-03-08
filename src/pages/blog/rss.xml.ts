import rss, { pagesGlobToRssItems } from '@astrojs/rss';

// ! change the site link when you're done.
export async function get() {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://vlusky.github.io/',
    items: await pagesGlobToRssItems(import.meta.glob('../../pages/posts/*.md')),
    customData: `<language>en-us</language>`,
  });
}
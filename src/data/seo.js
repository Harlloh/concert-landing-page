import { currentEvent as event, site, concertDateLabel } from './event.js';

export const pages = {
  '/': {
    title: `Asher Praise Concert | Lagos Gospel Concert, December ${event.year}`,
    description: `Join Asher Praise Concert ${event.edition}, a free gospel praise and worship concert in Lagos on ${concertDateLabel(event)} at ${event.startTime}, ${event.venue}, Onipanu. Register online.`
  },
  '/give': { title: `Give to Our Community Charity | ${site.name}`, description: 'Support widows and people in need through the Asher Praise community charity. Find bank transfer details for the welfare endowment fund.' },
  '/gallery': { title: `Praise Concert Gallery | ${site.name}`, description: 'Explore photographs and moments of worship, gospel music and community from previous Asher Praise Concert gatherings in Lagos.' },
  '/playlist': { title: `Gospel Playlist & Prayer | ${site.name}`, description: 'Listen to the Asher Praise gospel playlist and share your prayer requests as we prepare for our praise and worship gathering in Lagos.' },
  '/team': { title: `Meet the Team | ${site.name}`, description: 'Meet the people behind Asher Praise Concert, bringing our community together in praise, worship and gospel music in Lagos.' },
  '/volunteer': { title: `Volunteer in Lagos | ${site.name}`, description: `Volunteer for Asher Praise Concert in Lagos this December ${event.year}. Share your time and gifts to help bring our praise and worship gathering to life.` }
};

export function eventSchema() {
  const time = event.startTime.match(/^(\d{1,2}):(\d{2})(am|pm)$/i);
  const hours = time ? String(Number(time[1]) % 12 + (time[3].toLowerCase() === 'pm' ? 12 : 0)).padStart(2, '0') : null;
  return {
    '@context': 'https://schema.org', '@type': 'MusicEvent',
    name: `${site.name} ${event.edition}: ${event.theme}`,
    description: pages['/'].description,
    startDate: time ? `${event.date}T${hours}:${time[2]}:00+01:00` : event.date,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    url: `${site.url}/`, image: [new URL(event.hero.src, site.url).href],
    location: { '@type': 'Place', name: event.venue, address: {
      '@type': 'PostalAddress', streetAddress: 'Onipanu', addressLocality: 'Lagos', addressRegion: 'Lagos', addressCountry: 'NG'
    } },
    organizer: { '@type': 'Organization', name: site.name, url: site.url, sameAs: site.socials.map(social => social.url) },
    ...(event.registration.priceLabel === 'free' ? { isAccessibleForFree: true, offers: {
      '@type': 'Offer', url: `${site.url}/#register`, price: 0, priceCurrency: 'NGN',
      availability: event.registration.status === 'open' ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut'
    } } : {})
  };
}

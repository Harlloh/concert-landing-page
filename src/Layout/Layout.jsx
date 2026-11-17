import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/footer";
import { currentEvent, site, concertDateLabel } from "../data/event";
import { pages, eventSchema } from "../data/seo";

const pageTitles = {
  "/give": "Do You Love Me?",
  "/gallery": "Gallery",
  "/playlist": "Playlist & Prayer",
  "/team": "Meet the Team",
  "/volunteer": "Volunteer"
};

export default function Layout() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  useEffect(() => {
    const title = pages[pathname]?.title || (pathname === "/"
      ? `${site.name} ${currentEvent.edition}: ${currentEvent.theme}`
      : `${pageTitles[pathname] || site.name} | ${site.name}`);
    const description = pages[pathname]?.description || `${concertDateLabel()} at ${currentEvent.venue}, ${currentEvent.location}. Join ${site.name} ${currentEvent.edition}: ${currentEvent.theme}.`;
    const image = new URL(currentEvent.hero.src, site.url).href;
    const canonical = new URL(pathname, site.url).href;

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonical);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);
    document.getElementById('event-schema')?.remove();
    if (pathname === '/') {
      const schema = document.createElement('script');
      schema.id = 'event-schema';
      schema.type = 'application/ld+json';
      schema.textContent = JSON.stringify(eventSchema());
      document.head.appendChild(schema);
    }
  }, [pathname]);

  return <div className="layout" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" className="site-main" tabIndex="-1">
      <Outlet />
    </main>
      <Footer />
    </div>;
}

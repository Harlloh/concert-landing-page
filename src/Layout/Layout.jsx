import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/footer";
import { currentEvent, site, concertDateLabel } from "../data/event";

const pageTitles = {
  "/give": "Do You Love Me?",
  "/gallery": "Gallery",
  "/playlist": "Playlist & Prayer",
  "/team": "Meet the Team",
  "/volunteer": "Volunteer"
};

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = pathname === "/"
      ? `${site.name} ${currentEvent.edition}: ${currentEvent.theme}`
      : `${pageTitles[pathname] || site.name} | ${site.name}`;
    const description = `${concertDateLabel()} at ${currentEvent.venue}, ${currentEvent.location}. Join ${site.name} ${currentEvent.edition}: ${currentEvent.theme}.`;
    const image = new URL(currentEvent.hero.src, site.url).href;
    const canonical = new URL(pathname, site.url).href;

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonical);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);
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

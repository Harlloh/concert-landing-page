import { useEffect, useState } from 'react';
import { currentEvent, publishedMinisters, site } from '../../data/event';
export default function Ministers() {
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    let active = true;
    if (import.meta.env.DEV && new URLSearchParams(window.location.search).get('lineup') === 'preview') import('../../data/lineup.proposed').then(module => {
      if (active) setPreview(module.proposedMinisters);
    });
    return () => {
      active = false;
    };
  }, []);
  const ministers = preview || publishedMinisters();
  return <section className="ministers-section section-space" id="ministers">
    <div className="shell">
      <div className="section-intro">
        <div>
          <span className="section-label">Asher Praise {currentEvent.year}</span>
          <h2>Meet the ministers.</h2>
        </div>
        <p>Voices joining us in an offering of praise.</p>
      </div>
    {preview && <aside className="preview-notice">
        <strong>Organiser preview: proposed ministers.</strong>
        <p>This planning list is not an announced or confirmed lineup.</p>
      </aside>}
    {ministers.length ? <div className="minister-grid">{ministers.map(minister => <figure key={minister.id}>{minister.image && <img src={minister.image} alt={minister.name} loading="lazy" width="400" height="500" />}<figcaption>
            <h3>{minister.name}</h3>{preview && <p>Proposed / awaiting approval</p>}</figcaption>
        </figure>)}</div> : <div className="minister-announcement">
        <div>
          <h3>Announcements are on the way.</h3>
          <p>Our {currentEvent.year} minister lineup will be shared here once confirmed. Stay connected for the first announcements.</p>
        </div>
        <a className="text-link" href={site.socials[0].url}>Follow Asher Praise</a>
      </div>}
  </div>
  </section>;
}

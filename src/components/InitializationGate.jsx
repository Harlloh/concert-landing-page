import { useEffect, useState } from 'react';
import { currentEvent, site } from '../data/event';
function prepareImage(src) {
  const image = new Image();
  if (image.decode) { image.src = src; return image.decode(); }
  return new Promise(resolve => {
    image.onload = resolve;
    image.onerror = resolve;
    image.src = src;
  });
}
/** Shows only the existing logo until the entry assets and display fonts are ready. */
export default function InitializationGate({
  // eslint-disable-next-line react/prop-types
  children
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const fonts = document.fonts ? ['Ornate', 'designer', 'hazard'].map(font => document.fonts.load(`24px ${font}`)) : [];
    const tasks = [prepareImage(site.logo), ...fonts];
    if (window.location.pathname === '/') tasks.push(prepareImage(currentEvent.hero.src));
    // A failed or stalled optional asset must never trap the visitor on the logo.
    const fallback = setTimeout(() => {
      if (!cancelled) setReady(true);
    }, 8000);
    Promise.allSettled(tasks).then(() => {
      clearTimeout(fallback);
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
      clearTimeout(fallback);
    };
  }, []);
  return <>
    {!ready && <div className="boot-loader" role="status" aria-label="Loading Asher Praise Concert">
      <img src={site.logo} width="136" height="136" alt="Asher Praise Concert" />
    </div>}
    <div className={ready ? 'app-content' : 'app-content is-initializing'} aria-hidden={ready ? undefined : true} inert={ready ? undefined : ''}>{children}</div>
  </>;
}

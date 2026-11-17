import { Link } from 'react-router-dom';
import { currentEvent as event, site, archive, concertDateLabel } from '../../data/event';
import Carousel from '../carousel/Carousel';
import Ministers from './Ministers';
import Registration from './Registration';
import './home.css';

export default function Home() {
  return <div className="home">
    <Carousel />
    <section className="event-strip" aria-label="Event information">
      <div className="shell event-facts">
        <div>
          <span>Date</span>
          <p><time dateTime={event.date}>{concertDateLabel(event)}</time></p>
        </div>
        <div>
          <span>Venue</span>
          <p>{event.venue}<br />{event.location}</p>
          <a href={event.directions} target="_blank" rel="noreferrer">Get directions</a>
        </div>
        <div>
          <span>Time</span>
          <p>{event.startTime || 'Start time to be announced'}</p>
          <a href="#register">{event.registration.status === 'open' ? event.registration.openLabel : event.registration.closedLabel}</a>
        </div>
      </div>
    </section>
    <section className="about-section section-space" id="about">
      <div className="shell about-layout">
        <div>
          <span className="section-label">The heart of Asher Praise</span>
          <h2>Many voices.<br />One holy purpose.</h2>
          <iframe
            className="about-video"
            src={`https://www.youtube.com/embed/${new URL(archive.video).searchParams.get('v')}?start=0&end=60&autoplay=1&mute=1&playsinline=1`}
            title="Asher Praise Concert"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
          <a className="text-link" href={archive.video} target="_blank" rel="noreferrer">Watch a moment of Asher Praise</a>
        </div>
        <div>
          <p className="lead">Across cultures and denominations, we gather to celebrate the goodness of God.</p>
          <p>Asher Praise Concert brings passionate worshippers and gospel artists together in heartfelt worship and music. This annual gathering unites voices to glorify God as one.</p>
          <p>For Asher Praise {event.edition}, we gather under the theme <strong>{event.theme}</strong>.</p>
          <p>Join our free gospel praise and worship concert in Lagos on {concertDateLabel(event)} at {event.startTime}, {event.venue}, {event.location}. Celebrate this December with music, prayer and community. <a href="#register">Register to attend</a>.</p>
        </div>
      </div>
    </section>
    <Ministers />
    <section className="gallery-section section-space" id="gallery">
      <div className="shell">
        <div className="section-intro">
          <div>
            <span className="section-label">Memories from our gathering</span>
            <h2>The praise stays with us.</h2>
          </div>
          <Link className="text-link" to="/gallery">Explore previous editions</Link>
        </div>
        <div className="memory-grid">{archive.photos.map(photo => <figure key={photo.src}>
          <img src={photo.src} alt={photo.alt} width="800" height="1000" loading="lazy" />
          <figcaption>{photo.caption}</figcaption>
        </figure>)}</div>
      </div>
    </section>
    <section className="convener-section section-space">
      <div className="shell convener-layout">
        <figure>
          <img src={site.convener.image} alt="Adegoke, convener of Asher Praise Concert" width="900" height="1100" loading="lazy" />
          <figcaption>{site.convener.name}<span>Convener, Asher Praise Concert</span></figcaption>
        </figure>
        <div>
          <span className="section-label">A note from the convener</span>
          <h2>Expectant of<br />an outpouring.</h2>
          <blockquote>{site.convener.quote}</blockquote>
          {site.convener.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
    <Registration />
    <section className="involvement-section section-space" id="volunteer">
      <div className="shell">
        <div className="section-intro">
          <div>
            <span className="section-label">Your gifts have a place here</span>
            <h2>Be part of the gathering.</h2>
          </div>
          <p>Behind every gathering are people who give their time, their gifts, and their care.</p>
        </div>
        <div className="involvement-links">
          <Link to="/volunteer">Volunteer with us</Link>
          <a href={`mailto:${site.email}?subject=Partnership%20enquiry`}>Become a partner</a>
          <Link to="/give">Do you love me? <span>Our community charity</span></Link>
        </div>
        <div className="partner-heading">
          <h3>With gratitude to our existing partners.</h3>
          <p>Thank you for being part of the journey.</p>
        </div>
        <div className="partner-logos">{event.partners.map(partner => <img key={partner.src} src={partner.src} alt={partner.alt} loading="lazy" width="180" height="100" />)}</div>
      </div>
    </section>
    <section className="attend-questions">
      <div className="shell">
        <h2>Before you come.</h2>
        <div>
          <details>
            <summary>When and where is Asher Praise {event.year}?</summary>
            <p>{concertDateLabel(event)}, at {event.venue}, {event.location}. {event.startTime ? `The concert begins at ${event.startTime}.` : 'The start time will be announced.'}</p>
          </details>
          <details>
            <summary>How do I register?</summary>
            <p>Complete the registration form on this page, including your contact details and the people you would like to invite. <a href="#register">Go to registration</a>.</p>
          </details>
          <details>
            <summary>How can I volunteer or become a partner?</summary>
            <p>Visit the <Link to="/volunteer">volunteer page</Link> to learn more, or write to <a href={`mailto:${site.email}`}>{site.email}</a> with your enquiry.</p>
          </details>
        </div>
      </div>
    </section>
  </div>;
}

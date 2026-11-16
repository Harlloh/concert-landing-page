import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { currentEvent, concertDateLabel } from '../../data/event';
import './playlist.css';

const emptyPrayer = {
  name: '',
  email: '',
  prayerRequest: ''
};

export default function Playlist() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(emptyPrayer);
  const [feedback, setFeedback] = useState(null);
  const form = useRef(null);
  const feedbackNode = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handlePrayerRequestSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setFeedback(null);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(currentEvent.prayer.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });
      const result = await response.json();

      if (!response.ok || String(result?.status || '').toUpperCase() !== 'SUCCESS') {
        throw new Error('Prayer request was not confirmed');
      }

      setFormData({ ...emptyPrayer });
      form.current?.reset();
      setFeedback({
        type: 'success',
        text: 'Your prayer request has been shared with the Asher Praise team.'
      });
    } catch (error) {
      setFeedback({
        type: 'error',
        text: error.name === 'AbortError'
          ? 'The request timed out. Your prayer request was not confirmed; your details are still here. Please try again.'
          : 'We could not confirm your prayer request. Your details are still here; please try again.'
      });
    } finally {
      clearTimeout(timeout);
      setIsLoading(false);
      requestAnimationFrame(() => feedbackNode.current?.focus());
    }
  };

  return <div className="playlist-page">
    <section className="playlist-hero" aria-labelledby="playlist-title">
      <div className="shell playlist-hero-layout">
        <div className="playlist-hero-copy">
          <h1 id="playlist-title">Bring your requests to God.</h1>
          <blockquote className="playlist-scripture">
            <p>“Present your requests to God.”</p>
            <cite>Philippians 4:6</cite>
          </blockquote>
          <a className="button" href="#prayer-request">Share a prayer request</a>
        </div>
        <figure className="playlist-hero-image">
          <img
            src={currentEvent.hero.src}
            alt={currentEvent.hero.alt}
            width="1600"
            height="900"
          />
          <figcaption>{currentEvent.hero.caption}</figcaption>
        </figure>
      </div>
    </section>

    <section className="playlist-music section-space" aria-labelledby="playlist-music-title">
      <div className="shell">
        <div className="playlist-section-heading">
          <div>
            <h2 id="playlist-music-title">Let the praise stay with you.</h2>
          </div>
          <p>Listen again to music from Asher Praise.</p>
        </div>
        <ol className="playlist-tracks">
          {currentEvent.playlist.tracks.map((song) => <li key={song.artist}>
            <span className="playlist-track-artist">{song.artist}</span>
            <span className="playlist-track-caption">Asher Praise selection</span>
            <audio controls preload="none" aria-label={`Listen to the Asher Praise selection by ${song.artist}`}>
              <source src={song.src} type="audio/mpeg" />
              Your browser does not support audio playback.
            </audio>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="prayer-section section-space" id="prayer-request" aria-labelledby="prayer-title">
      <div className="shell prayer-layout">
        <div className="prayer-copy">
          <h2 id="prayer-title">There is room for your prayer.</h2>
          <p>Share what is on your heart with the Asher Praise team.</p>
          <p className="prayer-support">Your request is sent to the team by email. Please share only what you are comfortable sending.</p>
        </div>

        <form ref={form} className="prayer-form" onSubmit={handlePrayerRequestSubmit} aria-busy={isLoading}>
          <fieldset disabled={isLoading}>
            <legend>Your prayer request</legend>
            <div className="prayer-fields">
              <div className="prayer-field">
                <label htmlFor="prayer-name">Your name</label>
                <input
                  type="text"
                  id="prayer-name"
                  name="name"
                  autoComplete="name"
                  maxLength="160"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="prayer-field">
                <label htmlFor="prayer-email">Your email</label>
                <input
                  type="email"
                  id="prayer-email"
                  name="email"
                  autoComplete="email"
                  maxLength="254"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="prayer-field">
                <label htmlFor="prayer-text">Your prayer request</label>
                <textarea
                  id="prayer-text"
                  name="prayerRequest"
                  rows="5"
                  maxLength="4000"
                  required
                  value={formData.prayerRequest}
                  onChange={handleChange}
                />
              </div>
            </div>
          </fieldset>
          <button className="button" type="submit" disabled={isLoading}>
            {isLoading ? 'Sharing your request…' : 'Submit prayer request'}
          </button>
          {feedback && <p
            className={`prayer-feedback ${feedback.type}`}
            role={feedback.type === 'error' ? 'alert' : 'status'}
            tabIndex="-1"
            ref={feedbackNode}
          >{feedback.text}</p>}
        </form>
      </div>
    </section>

    <section className="playlist-event" aria-labelledby="playlist-event-title">
      <div className="shell playlist-event-layout">
        <div>
          <h2 id="playlist-event-title">Praise is better shared.</h2>
        </div>
        <div className="playlist-event-details">
          <p><time dateTime={currentEvent.date}>{concertDateLabel()}</time></p>
          <p>{currentEvent.venue}<br />{currentEvent.location}</p>
          <Link className="button" to="/#register">Register for the concert</Link>
        </div>
      </div>
    </section>
  </div>;
}

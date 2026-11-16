import { useRef, useState } from 'react';
import { currentEvent, site, concertDateLabel } from '../../data/event';
import { submitVolunteerInterest } from '../../lib/volunteer';
import './volunteer.css';

export default function Volunteer() {
  const [feedback, setFeedback] = useState(null);
  const [busy, setBusy] = useState(false);
  const form = useRef(null);
  const lock = useRef(false);
  const feedbackNode = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (lock.current) return;
    setFeedback(null);
    lock.current = true;
    setBusy(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    try {
      const data = Object.fromEntries(new FormData(event.currentTarget).entries());
      await submitVolunteerInterest(currentEvent.volunteer.endpoint, data, {
        signal: controller.signal
      });
      form.current?.reset();
      setFeedback({
        type: 'success',
        text: 'Your volunteer interest has been sent to the team. Thank you for offering to help.'
      });
    } catch (error) {
      setFeedback({
        type: 'error',
        text: error.name === 'AbortError'
          ? 'The request timed out, so we could not confirm your submission. Your details are still here; please try again or email the team.'
          : 'We could not confirm your submission. Your details are still here; please try again or email the team.'
      });
    } finally {
      clearTimeout(timeout);
      lock.current = false;
      setBusy(false);
      requestAnimationFrame(() => feedbackNode.current?.focus());
    }
    requestAnimationFrame(() => feedbackNode.current?.focus());
  }

  return <div className="volunteer-page">
    <section className="volunteer-hero" aria-labelledby="volunteer-title">
      <div className="shell volunteer-hero-layout">
        <div className="volunteer-hero-copy">
          <h1 id="volunteer-title">Help make room for praise.</h1>
          <p className="lead">Give your time and gifts at Asher Praise Concert {currentEvent.edition}.</p>
          <p>Tell us what you would like to contribute and when you are available.</p>
          <div className="volunteer-hero-actions">
            <a className="button" href="#volunteer-form">Share your interest</a>
            <a className="text-link" href={`mailto:${site.email}?subject=Volunteer%20enquiry`}>Email the team</a>
          </div>
        </div>
        <figure className="volunteer-hero-image">
          <img src={currentEvent.hero.src} alt={currentEvent.hero.alt} width="1600" height="900" />
          <figcaption>{currentEvent.hero.caption}</figcaption>
        </figure>
      </div>
    </section>

    <section className="volunteer-event" aria-label="Concert details">
      <div className="shell volunteer-event-facts">
        <div>
          <span>Date</span>
          <p><time dateTime={currentEvent.date}>{concertDateLabel()}</time></p>
        </div>
        <div>
          <span>Venue</span>
          <p>{currentEvent.venue}<br />{currentEvent.location}</p>
        </div>
        <div>
          <span>Start time</span>
          <p>{currentEvent.startTime || 'To be announced'}</p>
        </div>
      </div>
    </section>

    <section className="volunteer-form-section section-space" id="volunteer-form" aria-labelledby="volunteer-form-title">
      <div className="shell volunteer-form-layout">
        <div className="volunteer-form-copy">
          <h2 id="volunteer-form-title">How would you like to help?</h2>
          <p>Share a little about yourself, the things you enjoy doing, and when you might be available.</p>
          <p className="volunteer-contact">Need to reach us now? <a href={`mailto:${site.email}?subject=Volunteer%20enquiry`}>{site.email}</a></p>
        </div>

        <form ref={form} className="volunteer-form" aria-labelledby="volunteer-form-title" onSubmit={handleSubmit} aria-busy={busy}>
          <fieldset disabled={busy}>
            <legend>Your volunteer interest</legend>
            <p className="volunteer-form-note">Share your details and the concert team will follow up about volunteering.</p>
            <div className="volunteer-fields">
              <div className="volunteer-field">
                <label htmlFor="volunteer-name">Full name (required)</label>
                <input id="volunteer-name" name="name" type="text" autoComplete="name" maxLength="160" required />
              </div>
              <div className="volunteer-field">
                <label htmlFor="volunteer-email">Email address (required)</label>
                <input id="volunteer-email" name="email" type="email" autoComplete="email" maxLength="254" required />
              </div>
              <div className="volunteer-field">
                <label htmlFor="volunteer-phone">Phone or WhatsApp (optional)</label>
                <input id="volunteer-phone" name="phone" type="tel" autoComplete="tel" maxLength="40" />
              </div>
              <div className="volunteer-field">
                <label htmlFor="volunteer-availability">When are you available? (optional)</label>
                <input id="volunteer-availability" name="availability" type="text" maxLength="500" />
              </div>
              <div className="volunteer-field volunteer-field-wide">
                <label htmlFor="volunteer-interest-text">What would you like to help with? (required)</label>
                <textarea id="volunteer-interest-text" name="interest" rows="4" maxLength="4000" required />
              </div>
            </div>
          </fieldset>
          <button className="button" type="submit" disabled={busy}>{busy ? 'Sending interest…' : 'Submit interest'}</button>
          {feedback && <p className={`volunteer-feedback ${feedback.type}`} role={feedback.type === 'error' ? 'alert' : 'status'} tabIndex="-1" ref={feedbackNode}>
            {feedback.text} {feedback.type === 'error' && <a href={`mailto:${site.email}?subject=Volunteer%20enquiry`}>Email the team</a>}
          </p>}
        </form>
      </div>
    </section>
  </div>;
}

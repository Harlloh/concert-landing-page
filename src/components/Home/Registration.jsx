import { useRef, useState } from 'react';
import { currentEvent, site } from '../../data/event';
import { emptyRegistration, validateRegistration, registerAttendee } from '../../lib/registration';

export default function Registration() {
  const [data, setData] = useState({ ...emptyRegistration });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const form = useRef(null);
  const lock = useRef(false);
  const feedbackNode = useRef(null);
  const registrationOpen = currentEvent.registration.status === 'open';

  function handleChange(event) {
    const { name, value } = event.target;
    setData(previous => ({ ...previous, [name]: value }));
    setErrors(previous => ({ ...previous, [name]: undefined }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (lock.current || !registrationOpen) return;
    const next = validateRegistration(data);
    setErrors(next);
    setFeedback(null);
    if (Object.keys(next).length) {
      form.current.elements.namedItem(Object.keys(next)[0])?.focus();
      return;
    }
    lock.current = true;
    setBusy(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    try {
      const confirmed = await registerAttendee(currentEvent.registration.endpoint, data, {
        signal: controller.signal
      });
      if (confirmed) {
        setData({ ...emptyRegistration });
        setFeedback({
          type: 'success',
          text: 'The registration service confirmed your submission. Please check your email and WhatsApp for any further instructions from the team.'
        });
      } else {
        setFeedback({
          type: 'error',
          text: 'Your registration is not yet confirmed. Your details are still here. Please contact the team before submitting again.'
        });
      }
    } catch (error) {
      setFeedback({
        type: 'error',
        text: error.name === 'AbortError'
          ? 'The request timed out. Registration is unconfirmed. Your details are still here; please contact the team before retrying.'
          : 'We could not confirm your registration. Your details are still here. Please try again or contact the team if you are unsure whether it reached us.'
      });
    } finally {
      clearTimeout(timeout);
      lock.current = false;
      setBusy(false);
      requestAnimationFrame(() => feedbackNode.current?.focus());
    }
  }

  const fieldProps = name => ({
    id: name,
    name,
    required: true,
    value: data[name],
    onChange: handleChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': `${name}-help`
  });

  return <section className="registration-section section-space" id="register">
    <div className="shell registration-layout">
      <div className="registration-copy">
        <span className="section-label">You are invited</span>
        <h2>We can’t wait<br />to have you.</h2>
        <p>Get your {currentEvent.registration.priceLabel} ticket to Asher Praise Concert {currentEvent.edition}.</p>
        <p>Come with your family, invite a friend, and join us in praise.</p>
        <div className="registration-support">
          <h3>Need help registering?</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={handleSubmit} noValidate aria-busy={busy}>
          <fieldset disabled={busy || !registrationOpen}>
            <legend>Your details</legend>
            <p className="form-note">All fields are required.</p>
            <div className="registration-fields">
              <div className="inputs">
                <label htmlFor="name">Full name</label>
                <input {...fieldProps('name')} type="text" autoComplete="name" maxLength="160" />
                <p id="name-help" className="field-help">{errors.name || ''}</p>
              </div>
              <div className="inputs">
                <label htmlFor="email">Email address</label>
                <input {...fieldProps('email')} type="email" autoComplete="email" />
                <p id="email-help" className="field-help">{errors.email || ''}</p>
              </div>
              <div className="inputs">
                <label htmlFor="location">Where will you be coming from?</label>
                <input {...fieldProps('location')} type="text" autoComplete="address-level2" />
                <p id="location-help" className="field-help">{errors.location || ''}</p>
              </div>
              <div className="inputs">
                <label htmlFor="whatsappNumber">WhatsApp number(s)</label>
                <input {...fieldProps('whatsappNumber')} type="tel" autoComplete="tel" />
                <p id="whatsappNumber-help" className="field-help">{errors.whatsappNumber || 'Include the country code. Separate multiple numbers with commas.'}</p>
              </div>
            </div>
          </fieldset>
          <fieldset disabled={busy || !registrationOpen}>
            <legend>Bring someone with you</legend>
            <div className="inputs">
              <label htmlFor="invitee">Email(s) of people you would invite</label>
              <input {...fieldProps('invitee')} type="email" multiple />
              <p id="invitee-help" className="field-help">{errors.invitee || 'Separate emails with commas. Only include people who have agreed to receive an invitation.'}</p>
            </div>
            <div className="inputs">
              <label htmlFor="message">Message</label>
              <textarea {...fieldProps('message')} rows="3" maxLength="2000" />
              <p id="message-help" className="field-help">{errors.message || 'Anything you would like the team to know.'}</p>
            </div>
          </fieldset>
          <p className="privacy-note">Your details are sent to the concert registration service to process attendance and invitations, including email and WhatsApp communication.</p>
          {!registrationOpen && <p className="form-note" role="status">{currentEvent.registration.closedMessage}</p>}
          <button className="button" id="formbtn" type="submit" disabled={busy || !registrationOpen}>{busy ? 'Submitting your registration…' : 'Register to attend'}</button>
          {feedback && <div tabIndex="-1" ref={feedbackNode} className={`form-feedback ${feedback.type}`} role={feedback.type === 'error' ? 'alert' : 'status'}>
            <p>{feedback.text}</p>
            {feedback.type === 'error' && <a href={`mailto:${site.email}`}>Contact the concert team</a>}
          </div>}
        </form>
      </div>
    </div>
  </section>;
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './give.css';

const accountNumber = '6452080598';

export default function Give() {
  const [copyStatus, setCopyStatus] = useState('');

  async function copyAccountNumber() {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopyStatus('Account number copied.');
    } catch {
      setCopyStatus('Please select and copy the account number above.');
    }
  }

  return <div className="give-page">
    <section className="give-hero">
      <div className="shell">
        <span className="section-label">The Asher Praise community charity</span>
        <h1>Do you<br />love me?</h1>
        <div className="give-hero-bottom">
          <p>Let our praise become an act of love. Support widows and people in need in our community.</p>
          <a className="button" href="#give-details">Make a donation <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="shell give-layout">
        <div className="give-story">
          <span className="section-label">Faith, expressed through care</span>
          <h2>Love that reaches<br />beyond the gathering.</h2>
          <p className="lead">The joy of Christmas and the warmth of community should reach those who have little to celebrate, too.</p>
          <p>Through our community charity, we extend care to widows and people in need. It is an invitation to let the light and love of Christ shine through the way we care for one another.</p>
          <div className="give-scripture">
            <span className="section-label">The call to care</span>
            <h3>“Feed my sheep.”</h3>
            <p>When Christ asked Peter, “Do you love me?”, he followed with a call to care for others. That same call is at the heart of this work: to carry our faith beyond the concert and into everyday life.</p>
          </div>
          <blockquote>All ye people exalt ye Jesus,<br />Kindle the light amidst all darkness,<br />That Father’s promise be fulfilled in the end.
            <cite>Celestial Church hymn 210</cite>
          </blockquote>
        </div>

        <aside className="give-donation" id="give-details" aria-labelledby="donation-heading">
          <span className="section-label">Give in Naira · NGN</span>
          <h2 id="donation-heading">An act of love.</h2>
          <p>Support our community charity by bank transfer using the details below.</p>
          <dl>
            <div><dt>Account name</dt><dd>ASHER PRAISE CONCERT</dd></div>
            <div><dt>Bank</dt><dd>MONIEPOINT</dd></div>
            <div><dt>Account number</dt><dd className="give-account-number">{accountNumber}</dd></div>
          </dl>
          <button className="button" type="button" onClick={copyAccountNumber}>Copy account number</button>
          <p className="give-copy-status" role="status">{copyStatus}</p>
          <div className="give-fund">
            <h3>Welfare endowment fund</h3>
            <p>CCC Zion Parish, Itedo Estate, Carwash Bus-stop, off Freedom Way, Ikate Lekki.</p>
          </div>
        </aside>
      </div>
    </section>

    <section className="give-closing">
      <div className="shell">
        <div><span className="section-label">Many voices. One holy purpose.</span><h2>There is a place<br />for your kindness.</h2></div>
        <Link className="text-link" to="/volunteer">Give your time. Volunteer with us <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  </div>;
}

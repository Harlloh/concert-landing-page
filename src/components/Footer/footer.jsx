import { Link } from "react-router-dom";
import { currentEvent, site } from "../../data/event";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <img src={site.logo} alt={site.name} width="100" height="100" />
            <p>
              Many voices.
              <br />
              One offering of praise.
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            <Link to="/">Home</Link>
            <a href="/#about">About Asher Praise</a>
            <Link to="/team">Meet the team</Link>
            <Link to="/give">Do you love me?</Link>
            <Link to="/volunteer">Volunteer</Link>
            <Link to="/playlist">Playlist & prayer</Link>
          </div>
          <div id="contact">
            <h2>Get in touch</h2>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {site.phones.map((phone) => (
              <a key={phone} href={`tel:${phone}`}>
                {phone}
              </a>
            ))}
            <a href={currentEvent.directions}>
              {currentEvent.venue}
              <br />
              {currentEvent.location}
            </a>
          </div>
          <div>
            <h2>Stay connected</h2>
            {site.socials.map((social) => (
              <a key={social.name} href={social.url}>
                {social.name}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>With grateful hearts, from Lagos.</span>
          {/* <a href="#top">Back to top</a> */}
        </div>
      </div>
    </footer>
  );
}

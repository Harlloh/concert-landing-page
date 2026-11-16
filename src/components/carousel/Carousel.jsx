import { currentEvent, concertDateLabel } from "../../data/event";
import Countdown from "../../hooks/countdown";
import "./carousel.css";
export default function Carousel() {
  const [first, ...rest] = currentEvent.theme.split(" ");
  return (
    <section className="concert-hero" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src={currentEvent.hero.src}
        alt={currentEvent.hero.alt}
        width="1600"
        height="900"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <p className="hero-edition">
            Asher Praise Concert {currentEvent.edition}{" "}
            <span>/ {currentEvent.year}</span>
          </p>
          <h1 id="hero-title">
            {first}
            <br />
            <span>{rest.join(" ")}</span>
          </h1>
          <p className="hero-invitation">
            {currentEvent.hero.invitation.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="hero-actions">
            <a href="#register" className="button">
              Register to attend
            </a>
            {/* <a href="#about" className="hero-learn">Discover the gathering</a> */}
          </div>
        </div>
        <div className="hero-location">
          <time dateTime={currentEvent.date}>{concertDateLabel()}</time>
          <span>
            {currentEvent.venue}
            <br />
            {currentEvent.location}
          </span>
        </div>
      </div>
      <div className="hero-countdown">
        <div className="shell">
          <Countdown />
        </div>
      </div>
    </section>
  );
}

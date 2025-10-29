import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarker,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import "./footer.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <section className="footer-sect" id="footer">
      <div className="container footer-container">
        <div className="comp">
          <img src={logo} className="logoFooter" alt="" />
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#ministers">Ministers</a>
            </li>
            <li>
              <a href="/#volunteer">Volunteer</a>
            </li>
            <li>
              <a href="/#contact" className="btn">
                Contact
              </a>
            </li>
          </ul>
          {/* <span>
            <p>
              <FaMapMarkerAlt />
              Freudes place maryland ikeja, Lagos state
            </p>
            <p>goke.adedamola@gmail.com</p>
          </span> */}
          <div className="d-flex flex-column gap-3 footer-text">
            <Link to="tel:+2347017170126">
              <FaPhoneAlt color="#FFA3A3" />
              +2348067021210
            </Link>
            <Link to="tel:+2347017170126">
              <FaPhoneAlt color="#FFA3A3" />
              +2348166906999
            </Link>
            <Link to="mailto:pr@asherpraiseconcert.com">
              <FaEnvelope color="#FFA3A3" />
              pr@asherpraiseconcert.com
            </Link>
            <Link to="#">
              <FaMapMarker color="#FFA3A3" />
              Solution Arena. Palmgrove, Lagos state
            </Link>
          </div>
        </div>
        <div className="sociall">
          <h4>Stay connected</h4>
          <div className="socials d-flex gap-3">
            <NavLink to="https://web.facebook.com/groups/3619767918302573/">
              <FaFacebook size="1.5rem" />
            </NavLink>
            <NavLink to="https://www.instagram.com/asherpraiseconcert/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">
              <FaInstagram size="1.5rem" />
            </NavLink>

            <NavLink to="https://www.youtube.com/@adegokeadedamola159">
              <FaYoutube size="1.5rem" />
            </NavLink>
          </div>
        </div>
        <div className="copyright">&copy; Asher Praise Concert {date}</div>
      </div>
    </section>
  );
}

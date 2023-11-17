import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import "./footer.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <section className="footer-sect">
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
          <span>
            <p>
              <FaMapMarkerAlt />
              Freudes place maryland ikeja, Lagos state
            </p>
            <p>goke.adedamola@gmail.com</p>
          </span>
        </div>
        <div className="sociall">
          <h4>Stay connected</h4>
          <div className="socials d-flex gap-3">
            <NavLink to="www.facebbok.com">
              <FaFacebook size="1.5rem" />
            </NavLink>
            <NavLink to="https://www.instagram.com/asherpraiseconcert/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">
              <FaInstagram size="1.5rem" />
            </NavLink>

            <NavLink to="hhtps://youtube.com">
              <FaYoutube size="1.5rem" />
            </NavLink>
          </div>
        </div>
        <div className="copyright">&copy; Asher Praise Concert 2023</div>
      </div>
    </section>
  );
}

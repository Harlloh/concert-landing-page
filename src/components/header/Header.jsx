import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { site } from "../../data/event";
import "./header.css";
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    function close(e) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" to="/" aria-label="Asher Praise Concert home">
          <img src={site.logo} alt={site.name} width="76" height="76" />
        </Link>
        <nav
          id="main-navigation"
          className={open ? "site-nav is-open" : "site-nav"}
          aria-label="Main navigation"
          onClick={(e) => {
            if (e.target.closest("a")) setOpen(false);
          }}
        >
          <Link to="/">Home</Link>
          <a href="/#ministers">Ministers</a>
          <Link to="/gallery">Gallery</Link>
          <Link to="/playlist">Playlist & prayer</Link>
          <Link to="/team">Meet the team</Link>
          <Link to="/volunteer">Volunteer</Link>
        </nav>
        <div className="header-actions">
          <a href="/#register" className="button nav-register">
            Register
          </a>
          <button
            className="menu-toggle"
            type="button"
            ref={toggle}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="main-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}

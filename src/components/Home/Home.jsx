// import ControlledCarousel from "../carousel/Carousel";
import aboutImg from "../../assets/aboutImg.jpg";
import dot from "../../assets/dot.png";
import confetti1 from "../../assets/Confetti (1).png";
import confetti11 from "../../assets/Pattern.png";
import confetti2 from "../../assets/Confetti (2).png";
import confetti3 from "../../assets/Confetti (3).png";
import confetti4 from "../../assets/Pattern1.png";
import partConfetti from "../../assets/Confetti (4).png";
import partConfetti1 from "../../assets/Confetti (5).png";
// import gallery from "../../assets/minister.jpg";
import partConfetti2 from "../../assets/Confetti (6).png";
import contactconfettiii from "../../assets/Confetti (7).png";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import emailjs from "@emailjs/browser";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ministerurl from "../../assets/minister.jpg";
import partnerUrl from "../../assets/theblock.webp";
import contactconfetti from "../../assets/Shape.png";
import contactconfetti2 from "../../assets/Shape (1).png";
import "./home.css";
import { Link } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarker,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
// import Countdown from "../../hooks/countdown";
import Carousel from "../carousel/Carousel";
import { useRef } from "react";
// import Gallery from "../carousel/Carousel";
// import Hero from "../carousel/Carousel";

import paulTomisin from "../../assets/paultomisin.jpg";
import YinkaAlase from "../../assets/alaseyori.jpg";
import Debora from "../../assets/Deborah Pelumi.jpg";
import Harjovy from "../../assets/Harjovy.jpg";
import harmony from "../../assets/Moses Harmony.jpg";
import topeOlo from "../../assets/Pastor Tope Olowoporoku.jpg";
import aluko from "../../assets/Evang Tunde Aluko.jpg";
import RevealSection from "../revealAnimation";
// import Victorade from "../../assets/v";
export default function Home() {
  const form = useRef();

  const ministers = [
    {
      id: 1,
      ministerName: "Paul Tomisin",
      url: paulTomisin,
    },
    {
      id: 2,
      ministerName: " Yinka Alaseyori ",
      url: YinkaAlase,
    },
    {
      id: 3,
      ministerName: "Deborah Pelumi",
      url: Debora,
    },
    {
      id: 4,
      ministerName: "Harjovy ",
      url: Harjovy,
    },
    {
      id: 5,
      ministerName: "Victor Ademofe",
      url: ministerurl,
    },
    {
      id: 5,
      ministerName: "Moses Harmony",
      url: harmony,
    },
    {
      id: 5,
      ministerName: "Elijah Akintunde",
      url: ministerurl,
    },
  ];

  const wordministers = [
    {
      id: 5,
      ministerName: "Evang Tunde Aluko",
      url: aluko,
    },
    {
      id: 6,
      ministerName: "Pastor Tope Olowoporoku",
      url: topeOlo,
    },
  ];
  const partners = [
    {
      id: 1,
      ministerName: "Kunle Adewole",
      url: partnerUrl,
    },
    {
      id: 2,
      ministerName: "Adeoye Sunday ",
      url: partnerUrl,
    },
    {
      id: 3,
      ministerName: "Kingston Frank",
      url: partnerUrl,
    },
    {
      id: 4,
      ministerName: "Kingston Frank",
      url: partnerUrl,
    },
    {
      id: 5,
      ministerName: "Kingston Frank",
      url: partnerUrl,
    },
    {
      id: 6,
      ministerName: "Kingston Frank",
      url: partnerUrl,
    },
    {
      id: 7,
      ministerName: "Kingston Frank",
      url: partnerUrl,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tucsc17",
        "template_xewlvcq",
        form.current,
        "PDrtfi1e08Upd-uN7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="home">
      <Carousel />
      <RevealSection>
        <section className="aboutsect " id="about">
          <div className="detailsss">
            <div className="detail d-flex gap-2 align-items-center">
              <FaCalendarAlt color="white" />
              <div className="detail-details text-white">
                <h4 style={{ margin: 0, padding: 0 }}>Date</h4>
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: ".82rem",
                    lineHeight: "none",
                  }}
                >
                  December 27th, 2023.
                </p>
              </div>
            </div>
            <div className="detail d-flex gap-2 align-items-center">
              <FaMapMarkerAlt color="white" />
              <div className="detail-details text-white">
                <h4 style={{ margin: 0, padding: 0 }}>Location:</h4>
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: ".82rem",
                    lineHeight: "none",
                    // width: "75%",
                  }}
                >
                  Freudes place maryland ikeja, Lagos state
                </p>
              </div>
            </div>
            <div className="detail d-flex gap-2 align-items-center">
              <FaClock color="white" />
              <div className="detail-details text-white">
                <h4 style={{ margin: 0, padding: 0 }}>Time</h4>
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    fontSize: ".82rem",
                    lineHeight: "none",
                  }}
                >
                  4:00pm GMT+1(WAT)
                </p>
              </div>
            </div>
          </div>
          <img
            className="confetti about-confetti"
            src={confetti1}
            alt="Asher Praise Concert - Crowd enjoying the event"
          />
          <img
            className="confetti  bout-confetti1"
            src={confetti11}
            alt="Asher Praise Concert - Crowd enjoying the event"
          />
          <img
            className="confetti dot-confetti"
            src={dot}
            alt="Asher Praise Concert - Crowd enjoying the event"
          />
          <div className="container container-md container-sm about-container">
            <div className=" about ">
              {/* <div className="img"> */}
              <img
                className="img1 reveal fade-right"
                src={aboutImg}
                alt="Asher Praise Concert - Crowd enjoying the event"
              />
              {/* </div> */}
              <div className="aboutcontent reveal fade-left">
                <h2>
                  About <b>Asher Praise Concert</b>{" "}
                </h2>
                {/* <h5>Visions and missions</h5> */}
                <p>
                  Join us for an enchanting evening filled with soul-stirring
                  melodies, powerful performances, and heartfelt worship. Our
                  talented choir and special guests will lead us in an
                  unforgettable experience of praise and worship.
                </p>
                <div className="socialssss">
                  <p>
                    Follow us, for the latest updates and behind-the-scenes
                    glimpses leading up to the concert.
                  </p>
                  <span>
                    <Link
                      to="https://youtube.com"
                      className="sociallll"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube color="black" />
                      <p>Youtube</p>
                    </Link>
                    <Link
                      to="facebook.com"
                      className="sociallll"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook color="black" />
                      <p>Facebook</p>
                    </Link>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to={
                        "https://www.instagram.com/asherpraiseconcert/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                      }
                      className="sociallll"
                    >
                      <FaInstagram color="black" />
                      <p>Instagram</p>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* QUOTE */}
      <section className="quoteSect">
        <div className="container container-md container-sm quote">
          <h3>
            <i>
              “The most effective preaching of the gospel is when it is
              accompanied by beautiful, appropriate music.”
            </i>
          </h3>
        </div>
      </section>
      <RevealSection>
        <section className="ministers-sect confetti-sect" id="ministers">
          <img
            src={confetti2}
            alt="Asher Praise Concert - Crowd enjoying the event"
            className="confetti confetti2"
          />
          <img
            src={confetti3}
            alt="Asher Praise Concert - Crowd enjoying the event"
            className="confetti confetti3 "
          />
          <img
            src={confetti4}
            alt="Asher Praise Concert - Crowd enjoying the event"
            className="confetti confetti4"
          />
          <div className="container container-md container-sm minister-container">
            <div className="ministersContent reveal fade-bottom">
              <h1>
                AsherPraise 2023 <span>/meet the ministers</span>
              </h1>
              <p>
                Welcome to a divine experience in Asher Praise 2023! As we
                gather in God&apos;s presence, we invite you to meet the
                ministers who will be leading us in an evening of worship and
                musical celebration.
              </p>
            </div>
            <div className="ministers reveal">
              <div className="minister">
                {ministers.map((minister) => (
                  <div className="ministerdiv fade-right" key={minister.id}>
                    <img src={minister.url} alt={minister.ministerName} />
                    <h2>{minister.ministerName}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="container container-md container-sm minister-container">
          <div className="ministersContent reveal fade-right">
            <h1>
              AsherPraise 2023 <span>/meet the word ministers</span>
            </h1>
            <p>
              Welcome to a divine experience in Asher Praise 2023! As we gather
              in God&apos;s presence, we invite you to meet the ministers who
              will be leading us in an evening of God&apos;s word and musical
              celebration.
            </p>
          </div>
          <div className="ministers">
            <div className="minister reveal fade-bottom">
              {wordministers.map((minister) => (
                <div className="ministerdiv " key={minister.id}>
                  <img src={minister.url} alt={minister.ministerName} />
                  <h2>{minister.ministerName}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* GET INVOLVED */}
      <section
        className=" text-white py-5 align-items-center volunteer-sect"
        id="volunteer"
      >
        <div className="container text-center">
          <h1>Get Invoved.</h1>
          <p>
            Would you like to contribute your talents to the concert or
            volunteer to help with preparations? We welcome your involvement!
            Contact us at{" "}
            <Link to="mailto:goke.adedamola@gmail.com" className="emailllll">
              goke.adedamola@gmail.com
            </Link>{" "}
            for more information.
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners-sect">
        <img
          src={partConfetti}
          className="confetti partConfetti"
          alt="Asher Praise Concert - Crowd enjoying the event"
        />
        <img
          src={partConfetti1}
          className="confetti partConfetti1"
          alt="Asher Praise Concert - Crowd enjoying the event"
        />
        <img
          src={partConfetti2}
          className="confetti partConfetti2"
          alt="Asher Praise Concert - Crowd enjoying the event"
        />
        <div className="container container-md container-sm partners-container">
          <div className="partner-content">
            <h1>Our Partners</h1>
            <p>
              Want to become a partner
              <a href="#contact">Contact us</a>
            </p>
          </div>

          <Swiper
            // install Swiper modules

            spaceBetween={1}
            slidesPerView={5}
            // navigation
            loop={true} // Enable infinite loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // scrollbar={{ draggable: true }}

            modules={[Autoplay, Navigation, A11y, Scrollbar]}
            style={{ height: "fit-content" }}
          >
            {partners.map((partner) => (
              <div className="partner" key={partner.id}>
                <SwiperSlide>
                  <img
                    className="slidImg"
                    src={partner.url}
                    alt={partner.partnerName}
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </section>

      {/* GALLERY */}
      <section
        className="gallery-sect text-white py-5"
        id="gallery"
        style={{ backgroundColor: "rgb(28, 43, 72)" }}
      >
        <h1 className="conveyners">Convener&apos;s note</h1>
        <div className="container container-fluid conveyner">
          <div className="content gap-3 d-flex flex-column">
            <cite>
              O Praise ye the LORD All ye heavenly hosts The great hour is at
              hand
            </cite>
            <p>
              With this song one Saturday evening, a young man who had witnessed
              the miraculous heralded the manifestation of the promised. Barely
              three decades before, a sexton at the St. Saviour’s Church Ijebu
              Ode had shared his dreams about the outpouring of the Holy Spirit,
              nudging parishioners into prayers. Because we believe in the
              mighty power of God to intervene in our own time, we sing the
              promised in ASHERS PRAISE expectant of another outpouring of the
              Holy Spirit.
            </p>
            <p>
              Join us as we tell the story of manifestation, and as we plan a
              most impactful Praise Concert in the city of Lagos, mindful of the
              historicity of our endeavor, and confident of what it brings to
              bear.
            </p>

            <span>
              <h5>ADEGOKE.</h5>
              <cite>convener</cite>
            </span>
          </div>
          <div className="image">
            <img
              src={ministerurl}
              alt="Asher Praise Concert - Crowd enjoying the event"
            />
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <img
          src={contactconfettiii}
          className="confetti"
          alt="Asher Praise Concert - Crowd enjoying the event"
        />
        <div className="contact-details">
          <img
            src={contactconfetti}
            alt="Asher Praise Concert - Crowd enjoying the event"
            className="contactconfettiiiii"
          />
          <h1>Contact Us</h1>
          <p>
            If you have any questions or need further assistance, please
            don&apos;t hesitate to reach out to us
          </p>
          <div>
            <Link to="tel:+2347017170126">
              <FaPhoneAlt color="#FFA3A3" />
              +2348067021210
            </Link>
            <Link to="tel:+2347017170126">
              <FaPhoneAlt color="#FFA3A3" />
              +2348166906999
            </Link>
            <Link to="mailto:goke.adedamola@gmail.com">
              <FaEnvelope color="#FFA3A3" />
              goke.adedamola@gmail.com
            </Link>
            <Link to="#">
              <FaMapMarker color="#FFA3A3" />
              Freudes place maryland ikeja, Lagos state
            </Link>
          </div>
        </div>
        <div className="contact-form">
          <img
            src={contactconfetti2}
            alt="Asher Praise Concert - Crowd enjoying the event"
            className="contactconfettiiiii con"
          />

          <h1>Fill in your details</h1>
          <p>send us a message</p>
          <form action="" onSubmit={handleSubmit} ref={form}>
            <div className="inputs">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name here..."
              />
            </div>
            <div className="inputs">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address..."
              />
            </div>
            <div className="inputs">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                rows="4"
                cols="50"
                required
                placeholder="Send us a message..."
              ></textarea>
            </div>
            <button type="submit" className="btn " id="formbtn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

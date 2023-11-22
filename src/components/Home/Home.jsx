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
import asherimage from "../../assets/asherimage.jpg";
import asherimage1 from "../../assets/asherimage1.jpg";
import asherimage2 from "../../assets/asherimage2.jpg";
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
// import contactconfetti from "../../assets/Shape.png";
import contactconfetti2 from "../../assets/Shape (1).png";
import "./home.css";
import { Link } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  FaCalendarAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
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
import { toast } from "react-toastify";
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
        "service_zowvbey",
        "template_dk2xxuf",
        form.current,
        "_dav46sRXvD_65HCc"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your message has been sent succesfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error);
        }
      );
    e.target.reset();
  };
  return (
    <div className="home">
      <Carousel />
      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <img
          src={contactconfettiii}
          className="confetti contact-confetti"
          alt="Asher Praise Concert - Crowd enjoying the event"
        />
        {/* <div className="contact-details">
          <img
            src={contactconfetti}
            alt="Asher Praise Concert - Crowd enjoying the event"
            className="contactconfettiiiii"
          />
          
        </div> */}
        <div style={{ overflow: "scroll" }} className="d-flex">
          <img
            src={asherimage}
            style={{ width: "100%" }}
            alt="Image of an asher concert person ;)"
          />
          <img
            src={asherimage1}
            style={{ width: "100%" }}
            alt="Image of an asher concert person ;)"
          />
          <img
            src={asherimage2}
            style={{ width: "100%" }}
            alt="Image of an asher concert person ;)"
          />
        </div>
        <div className="detailsss">
          <p
            style={{
              textAlign: "center",
              color: "white",
              margin: 0,
              // marginTop: "-2rem",
            }}
          >
            Join us:
          </p>
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
                  fontSize: ".92rem",
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
        <div className="contact-form" id="register">
          <img
            src={contactconfetti2}
            alt="Asher Praise Concert - Crowd enjoying the event"
            className="contactconfettiiiii con"
          />

          <h1
            style={{
              fontFamily: "hazard",
              textAlign: "center",
              fontSize: "2rem",
              color: "rgb(224, 189, 64)",
              letterSpacing: ".3rem",
            }}
          >
            We can&apos;t wait to have you
          </h1>
          <p style={{ textAlign: "center" }}>
            Get your free ticket to #asherpraiseconcert2023
          </p>
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
              <label htmlFor="invitee">
                {" "}
                Email(s) of people you would invite{" "}
                <cite>
                  <i>
                    (List emails of people you want us to send ticket in your
                    name)
                  </i>
                </cite>
              </label>
              <input
                type="email"
                name="invitee"
                id="invitee"
                required
                placeholder="Send ticket to...."
              />
            </div>
            <div className="inputs">
              <label htmlFor="invitee">
                {" "}
                Tell us where you&apos;ll be coming from:
              </label>
              <input
                type="text"
                name="location"
                id="lcation"
                required
                placeholder="I am coming from..."
              />
            </div>
            <div className="inputs">
              <label htmlFor="invitee">
                {" "}
                Whatsapp number(s) we can send in tickets
              </label>
              <input
                type="number"
                name="whatsappNumber"
                id="whatsappNumber"
                required
              />
            </div>
            <div className="inputs">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                rows="4"
                cols="50"
                required
                placeholder="ANything you want us to know..."
              ></textarea>
            </div>
            <button type="submit" className="btn " id="formbtn">
              Send Message
            </button>
          </form>
        </div>
      </section>

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
            <Link to="mailto:pr@asherpraiseconcert.com" className="emailllll">
              pr@asherpraiseconcert.com
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
    </div>
  );
}

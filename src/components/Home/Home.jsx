// import ControlledCarousel from "../carousel/Carousel";
// import aboutImg from "../../assets/aboutImg.jpg";
// import dot from "../../assets/dot.png";
// import confetti1 from "../../assets/Confetti (1).png";
// import confetti11 from "../../assets/Pattern.png";
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import adegoke from "../../assets/ADEGOKE.jpg";
import partnerUrl from "../../assets/partner0.png";
import partnerUrl1 from "../../assets/partner00.png";
import partnerUrl2 from "../../assets/partners000.jpg";
import partnerUrl3 from "../../assets/partners0000.jpg";
import partnerUrl4 from "../../assets/partners00000.jpg";
import partnerUrl5 from "../../assets/partners000000.png";
// import contactconfetti from "../../assets/Shape.png";
import contactconfetti2 from "../../assets/Shape (1).png";
import "./home.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { FaCalendarAlt, FaClock, FaFacebook, FaInstagram, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
// import Countdown from "../../hooks/countdown";
import Carousel from "../carousel/Carousel";
import { useRef, useState } from "react";
// import Gallery from "../carousel/Carousel";
// import Hero from "../carousel/Carousel";

import paulTomisin from "../../assets/paultomisin1.png";
import volunteer from "../../assets/Volunteers.jpeg.jpg";
import MikeAbdul from "../../assets/mike abdul.jpg";
import Debora from "../../assets/Deborah Pelumi1.png";
import micToyinbo from "../../assets/mic toyinbo.jpg";
import YinkaErinle from "../../assets/yinka erinle.jpeg";
import gokeBajowa from "../../assets/goke bajowa.jpeg";
// import topeOlo from "../../assets/topeolowo.png";
// import aluko from "../../assets/Evang Tunde Aluko1.png";
import dareJustified from "../../assets/dare justified.jpg";
import favorOjo from "../../assets/favour ojo.jpeg";
import RevealSection from "../revealAnimation";
import ConcertImages from "../concertimages/ConcertImages";
import Team from "../team/team";
// import Victorade from "../../assets/v";
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    invitee: "",
    location: "",
    whatsappNumber: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const ministers = [
    {
      id: 1,
      name: "Paul Tomisin",
      url: paulTomisin,
    },
    {
      id: 2,
      name: "Mike Abdul",
      url: MikeAbdul,
    },
    {
      id: 3,
      name: "Deborah Pelumi",
      url: Debora,
    },
    {
      id: 4,
      name: "Yinka Erinle",
      url: YinkaErinle,
    },
    {
      id: 5,
      name: "Michael Toyinbo",
      url: micToyinbo,
    },
    {
      id: 6,
      name: "Goke Bajowa",
      url: gokeBajowa,
    },
    {
      id: 7,
      name: "Dare Justified",
      url: dareJustified,
    },
    {
      id: 8,
      name: "Favour Ojo",
      url: favorOjo,
    },
  ];

  // const wordministers = [
  //   {
  //     id: 5,
  //     name: "Evang Tunde Aluko",
  //     url: aluko,
  //   },
  //   {
  //     id: 6,
  //     name: "Pastor Tope Olowoporoku",
  //     url: topeOlo,
  //   },
  // ];
  const partners = [
    {
      id: 1,
      name: "Kunle Adewole",
      url: partnerUrl,
    },
    {
      id: 2,
      name: "Adeoye Sunday ",
      url: partnerUrl1,
    },
    {
      id: 3,
      ministerName: "Kingston Frank",
      url: partnerUrl2,
    },
    {
      id: 4,
      ministerName: "Kingston Frank",
      url: partnerUrl3,
    },
    {
      id: 5,
      ministerName: "Kingston Frank",
      url: partnerUrl4,
    },
    {
      id: 6,
      ministerName: "Kingston Frank",
      url: partnerUrl5,
    },
  ];

  // const handleSubmit = (e)=>{
  //   const config = {
  //     // SecureToken: "ce40f022-9817-4e7f-a7de-d746c464a439",
  //     Host: "smtp.elasticemail.com",
  //     Username: "alloolorunfemi17977@yopmail.com",
  //     Password: "43AA8B545BD0980F87B1BE958777EE6C4422",
  //     Port: 2525,

  //     To: "alloolorunfemi@gmail.com",
  //     From: formData.email,
  //     Subject: "This is the from my register form",
  //     Body: `${formData.name} just registered`,
  //   };
  //   e.preventDefault();
  //   if(window.Email){
  //     console.log('hellooooo')
  //     window.Email.send(config).then(message => alert(message) )
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let res = await fetch("https://asherbackend.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });
      let result = await res.json();
      alert(result.status);
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        invitee: "",
        location: "",
        whatsappNumber: "",
        message: "",
      });
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="home">
      <Carousel />


      {/* <ToastContainer /> */}
      {/* CONTACT */}

      <div className="detailsss">
        <p
          style={{
            textAlign: "center",
            color: "white",
            margin: 0,
            // marginTop: "-2rem",
          }}
        >
          Join us for <b>#asherpraiseconcert2024</b>
        </p>
        <div className="ddddd ">
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
                  color: "rgb(224, 189, 64)",
                }}
              >
                December 27th, 2024.
              </p>
            </div>
          </div>
          <div className="detail d-flex gap-2 align-items-center">
            <FaMapMarkerAlt color="white" />
            <div className="detail-details text-white">
              <h4 style={{ margin: 0, padding: 0 }}>Venue:</h4>
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: ".92rem",
                  lineHeight: "none",
                  color: "rgb(224, 189, 64)",
                  // width: "75%",
                }}
              >
                The Lekki Centre. Lekki, Lagos state
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
                  color: "rgb(224, 189, 64)",
                }}
              >
                4:00pm GMT+1(WAT)
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT SECTION */}
      <section
      >
        <div className="container container-fluid conveyner d-grid pt-5 pb-5"

        >
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/bzuLJxAnC6U?start=0&end=60&autoplay=1&mute=1"
              title="Asher Praise Concert"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "315px", // Adjust height as needed
                borderRadius: "10px", // Optional: rounded corners
              }}
            ></iframe>
          </div>
          <div className="content gap-3 d-flex flex-column">
            <h2 className="asherhead">
              Asher Praise Concert
            </h2>
            <p>
              Asher praise concert is an uplifting gospel music event that gathers passionate worshippers and talented gospel artists from around the world. It’s a night dedicated to celebrating God’s goodness through heartfelt worship and inspiring music.
            </p>
            <p>
              This annual gathering breaks barriers of culture and denomination, uniting voices to glorify God as one. More than a concert, it’s a powerful encounter with God’s presence, leaving hearts refreshed and faith renewed.
            </p>
            <div className="d-flex gap-3">
              <a className="text-black" href="https://www.instagram.com/asherpraiseconcert/"><FaInstagram size={23} /></a>
              <a className="text-black" href="https://web.facebook.com/people/Asher-Praise-Concert/61553785067875/?_rdc=1&_rdr#"><FaFacebook size={23} /></a>
            </div>
          </div>
          <div>
          </div>
        </div>
      </section>



      <section className="contact-section" id="contact">
        <img
          src={contactconfettiii}
          className="confetti contact-confetti"
          alt="Ashser Praise image"
        />
        <div style={{ overflow: "scroll" }} className="d-flex">
          <img
            src={asherimage}
            style={{ width: "95%", height: "full", borderRight: "2px solid white" }}
            alt="Image of an asher concert person ;)"
          />
          <img
            src={asherimage1}
            style={{ width: "99%", height: "full", borderRight: "2px solid white" }}
            alt="Image of an asher concert person ;)"
          />
          <img
            src={asherimage2}
            style={{ width: "95%", height: "full", borderRight: "2px solid white" }}
            alt="Image of an asher concert person ;)"
          />

        </div>

        <div className="contact-form" id="register">
          <img
            src={contactconfetti2}
            alt="Asher Praise Concert - Concert in Lagos this December. December events in Lagos.Praise Concert in Lagos Asher Praise Concert.ADEGOKE concert"
            className="contactconfettiiiii con"
          />

          <h1
            style={{
              fontFamily: "hazard",
              textAlign: "center",
              fontSize: "1.72rem",
              textDecoration: "underline",
              letterSpacing: ".3rem",
            }}
          >
            We can&apos;t wait to have you
          </h1>
          <p style={{ textAlign: "center" }}>
            Get your free ticket to <b>#asherpraiseconcert2024</b>
          </p>
          <form action="" onSubmit={handleSubmit} ref={form}>
            <div className="inputs">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name here..."
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address..."
                value={formData.email}
                onChange={handleChange}
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
                type="text"
                name="invitee"
                id="invitee"
                required
                placeholder="Send ticket to(put comma between emails)...."
                value={formData.invitee}
                onChange={handleChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor="location">
                {" "}
                Tell us where you&apos;ll be coming from:
              </label>
              <input
                type="text"
                name="location"
                id="location"
                required
                placeholder="I am coming from..."
                value={formData.location}
                onChange={handleChange}
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
                value={formData.whatsappNumber}
                onChange={handleChange}
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
                placeholder="anything you want us to know..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn "
              id="formbtn"
              disabled={isLoading}
            >
              {isLoading ? "Registering" : "Submit"}
            </button>
          </form>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quoteSect">
        a
        <div className="container container-md container-sm quote">
          <h3>
            <i>
              “The most effective power of the gospel is when it is accompanied
              by beautiful, appropriate music.”
            </i>
          </h3>
        </div>
      </section>
      <RevealSection>
        <section className="ministers-sect confetti-sect" id="ministers">
          <img
            src={confetti2}
            alt="Ashser Praise image"
            className="confetti confetti2"
          />
          <img
            src={confetti3}
            alt="Ashser Praise image"
            className="confetti confetti3 "
          />
          <img
            src={confetti4}
            alt="Ashser Praise image"
            className="confetti confetti4"
          />
          <div className="container container-md container-sm minister-container">
            <div className="ministersContent reveal fade-bottom">
              <h1>
                AsherPraise 2024 <span>/meet the ministers</span>
              </h1>
            </div>
            <div className="ministers reveal">
              {/* <div className="minister">
                {ministers.map((minister) => (
                  <div className="ministerdiv fade-right" key={minister.id}>
                    <img src={minister.url} alt={minister.ministerName} />
                    <h2>{minister.ministerName}</h2>
                  </div>
                ))}
              </div> */}
              <Team type={'Ministers'} others={ministers} />

            </div>
          </div>
        </section>
        {/* <div className="container container-md container-sm minister-container">
          <div className="ministersContent reveal fade-right">
            <h1>
              AsherPraise 2024 <span>/meet the word ministers</span>
            </h1>
            <p>
              Welcome to a divine experience in Asher Praise 2024! As we gather
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
        </div> */}
        {/* <Team type={'Word Ministers'} others={wordministers} /> */}
      </RevealSection>

      {/* GET INVOLVED */}
      <section
        className=" text-white align-items-center volunteer-sect"
        id="volunteer"
      >
        <img src={volunteer} style={{ width: "100%", height: "auto" }} alt="" />
      </section>

      <section className="partners-sect">
        <img
          src={partConfetti}
          className="confetti partConfetti"
          alt="Asher Praise Concert - Concert in Lagos this December. December events in Lagos
Praise Concert in Lagos 
Asher Praise Concert
ADEGOKE concert"
        />
        <img
          src={partConfetti1}
          className="confetti partConfetti1"
          alt="Ashser Praise image"
        />
        <img
          src={partConfetti2}
          className="confetti partConfetti2"
          alt="Ashser Praise image"
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
            slidesPerView={4}
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
          <div className="image">
            <img
              src={adegoke}
              alt="Ashser Praise image"
            />
          </div>
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
        </div>
      </section>
      {/* <ConcertImages /> */}
    </div>
  );
}

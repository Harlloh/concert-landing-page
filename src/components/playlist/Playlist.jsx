import { useState } from "react";
import "./playlist.css";
import paulTomisin from "../../assets/paultomisin1.png";
// import YinkaAlase from "../../assets/alaseyori1.png";
// import Debora from "../../assets/Deborah Pelumi1.png";
// import sammyMoore from "../../assets/sammyMoore1.png";
// import Harjovy from "../../assets/Harjovy1.jpg.png";
// import harmony from "../../assets/Moses Harmony1.jpg.png";
// import engo from "../../assets/engo1.png";
// import paulaudio from "../../assets/paultomisinaudio.mp3";
// import yinkaudio from "../../assets/yinkaaudio.mp3";
// import deborahaudio from "../../assets/deborahaudio.mp3";
// import harjovyaudio from "../../assets/harjovyaudio.mp3";
// import harmonysaudio from "../../assets/harmonyaudio.mp3";
// import sammoore from "../../assets/sammoore.mp3";
// import engosaudio from "../../assets/engoaudio.mp3";
// import emailjs from "@emailjs/browser";
import bg3 from "../../assets/flier.jpeg";
import { Link } from "react-router-dom";

export default function Playlist() {
  // const [prayerRequest, setPrayerRequest] = useState("");
  // const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    prayerRequest: "",
  });
  // const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handlePrayerRequestSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_zowvbey",
  //       "template_ed8bxaj",
  //       form.current,
  //       "_dav46sRXvD_65HCc"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setPrayerRequest("");
  //         setName("");
  //         alert("Prayer request submitted:");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         alert(error);
  //       }
  //     );
  //   e.target.reset();
  // };

  const handlePrayerRequestSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let res = await fetch("https://bitsos-backend-123.onrender.com/asherpraise/playlist", {
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
        prayerRequest: "",
      });
    } catch (error) {
      alert(error);
      setIsLoading(false);

    }
  };
  const ministers = [
    // {
    //   id: 1,
    //   ministerName: "Paul Tomisin",
    //   audios: paulaudio,
    //   url: paulTomisin,
    //   ministersAlt:
    //     "Asher praise concert - Concert in Lagos this December-December events in Lagos-Praise Concert in Lagos-Asher Praise Concert-ADEGOKE&apos;concert",
    // },
    // {
    //   id: 2,
    //   ministerName: "Yinka Alaseyori",
    //   audios: yinkaudio,
    //   url: YinkaAlase,
    //   ministersAlt:
    //     "Asher praise concert - Concert in Lagos this December-December events in Lagos-Praise Concert in Lagos-Asher Praise Concert-ADEGOKE&apos;concert",
    // },
    // {
    //   id: 3,
    //   ministerName: "Deborah Pelumi",
    //   audios: deborahaudio,
    //   url: Debora,
    //   ministersAlt:
    //     "Asher praise concert - Concert in Lagos this December-December events in Lagos-Praise Concert in Lagos - Asher Praise Concert-ADEGOKE&apos;concert",
    // },
    // {
    //   id: 4,
    //   ministerName: "Harjovy",
    //   audios: harjovyaudio,
    //   url: Harjovy,
    //   ministersAlt:
    //     "Asher praise concert - Concert in Lagos this December-December events in Lagos - Praise Concert in Lagos-Asher Praise Concert-ADEGOKE&apos;concert",
    // },
    // {
    //   id: 5,
    //   ministerName: "Sammy Moore",
    //   audios: sammoore,
    //   url: sammyMoore,
    //   ministersAlt:
    //     "Asher praise concert - Concert in Lagos this December-December events in Lagos - Praise Concert in Lagos-Asher Praise Concert-ADEGOKE&apos;concert",
    // },
    // {
    //   id: 6,
    //   ministerName: "Moses Harmony",
    //   audios: harmonysaudio,
    //   url: harmony,
    //   ministersAlt:
    //     "Asher praise concert - Concert in Lagos this December - December events in Lagos - Praise Concert in Lagos-Asher Praise Concert-ADEGOKE&apos;concert",
    // },
    // {
    //   id: 7,
    //   ministerName: "Engo",
    //   audios: engosaudio,
    //   url: engo,
    //   ministersAlt:
    //     "Asher praise concert - Concert in Lagos this December-December events in Lagos - Praise Concert in Lagos-Asher Praise Concert-ADEGOKE&apos;concert",
    // },
  ];

  return (
    <>
      <section className="give-secti">
        <h3>
          <cite>
            Do not be anxious about anything, but in every situation, by prayer
            and petition, with thanksgiving, present your requests to God
          </cite>
          .
        </h3>
        <p>Philippians 4:6</p>
      </section>

      <section className="prayer-request-sect">
        <h4>Submit Your Prayer Request</h4>
        <form onSubmit={handlePrayerRequestSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
            onChange={handleChange}
            value={formData.name}
          />
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email"
            onChange={handleChange}
            value={formData.email}
          />
          <label htmlFor="prayerRequest">Your Prayer Request:</label>
          <textarea
            id="prayerRequest"
            name="prayerRequest"
            value={formData.prayerRequest}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting" : "Submit"}
          </button>
        </form>
      </section>

      <Link to="/" id="yy">
        <img
          src={bg3}
          className="bg3"
          alt="Concert in Lagos this December

December events in Lagos

Praise Concert in Lagos 

Asher Praise Concert

ADEGOKE concert"
        />
      </Link>
      {/* <section className="ministers-section align-items-center d-flex flex-column">
        <h4 style={{ fontFamily: "designer" }}>Featured Ministers</h4>
        <ul className="container mb-3">
          {ministers.map((minister) => (
            <li key={minister.id} className="my-4 w-100">
              <img
                src={minister.url}
                alt={minister.ministersAlt}
                className="imagee"
              />
              <span className="mx-1 w-100">
                <strong>{minister.ministerName}</strong>
                <audio controls className="w-100">
                  <source src={minister.audios} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </span>
            </li>
          ))}
        </ul>
      </section> */}
    </>
  );
}

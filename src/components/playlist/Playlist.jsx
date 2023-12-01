import { useRef, useState } from "react";
import "./playlist.css";
import paulTomisin from "../../assets/paultomisin1.png";
import YinkaAlase from "../../assets/alaseyori1.png";
import Debora from "../../assets/Deborah Pelumi1.png";
import sammyMoore from "../../assets/sammyMoore1.png";
import Harjovy from "../../assets/Harjovy1.jpg.png";
import harmony from "../../assets/Moses Harmony1.jpg.png";
import engo from "../../assets/engo1.png";
import paulaudio from "../../assets/paultomisinaudio.mp3";
import yinkaudio from "../../assets/yinkaaudio.mp3";
import deborahaudio from "../../assets/deborahaudio.mp3";
import harjovyaudio from "../../assets/harjovyaudio.mp3";
import harmonysaudio from "../../assets/harmonyaudio.mp3";
import sammoore from "../../assets/sammoore.mp3";
import engosaudio from "../../assets/engoaudio.mp3";
import emailjs  from "@emailjs/browser";

export default function Playlist() {
  const [prayerRequest, setPrayerRequest] = useState("");
  const [name, setName] = useState("");
  const form = useRef()


  const handlePrayerRequestSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zowvbey",
        "template_ed8bxaj",
        form.current,
        "_dav46sRXvD_65HCc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setPrayerRequest('')
          setName('')
          alert("Prayer request submitted:");
        },
        (error) => {
          console.log(error.text);
          alert(error);
        }
      );
    e.target.reset();
  };

  const ministers = [
    {
      id: 1,
      ministerName: "Paul Tomisin",
      audios: paulaudio,
      url: paulTomisin,
    },
    {
      id: 2,
      ministerName: "Yinka Alaseyori",
      audios: yinkaudio,
      url: YinkaAlase,
    },
    {
      id: 3,
      ministerName: "Deborah Pelumi",
      audios: deborahaudio,
      url: Debora,
    },
    {
      id: 4,
      ministerName: "Harjovy",
      audios: harjovyaudio,
      url: Harjovy,
    },
    {
      id: 5,
      ministerName: "Sammy Moore",
      audios: sammoore,
      url: sammyMoore,
    },
    {
      id: 6,
      ministerName: "Moses Harmony",
      audios: harmonysaudio,
      url: harmony,
    },
    {
      id: 7,
      ministerName: "Engo",
      audios: engosaudio,
      url: engo,
    },
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
        <form onSubmit={handlePrayerRequestSubmit} ref={form}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="enter your name..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="prayerRequest">Your Prayer Request:</label>

          <textarea
            id="message"
            name="message"
            value={prayerRequest}
            onChange={(e) => setPrayerRequest(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="ministers-section align-items-center d-flex flex-column">
        <h4 style={{ fontFamily: "designer" }}>Featured Ministers</h4>
        <ul className="container mb-3">
          {ministers.map((minister) => (
            <li key={minister.id} className="w-100 my-4">
              <img
                src={minister.url}
                alt={minister.ministerName}
                className="imagee"
              />
              <span className="w-100 mx-1">
                <strong>{minister.ministerName}</strong>
                <audio controls className="w-100">
                  <source src={minister.audios} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

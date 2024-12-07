import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "./ConcertImages.css";
import { SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function ConcertImages() {
  const concertImageLinks = [
    "https://drive.google.com/file/d/1ZyNSRqdIV4roY34uO9dCGQK1mXxvndfO/preview"


    // Add more links as needed
  ];
  return (
    <div className="gallery-parent">
      <h3 className="galle">ASHER CONCERT 2023 WAS A SUCCESS</h3>
      <p>Come this year and experience God in a new dimension.</p>
      <div className="concert-images-container">
        {concertImageLinks.map((link, index) => (
          // <img
          //   key={index}
          //   src={link}
          //   alt={`Concert Image ${index + 1}`}
          //   className="concert-image"
          // />
          <iframe key={index} src={link} width="150" height="150" allow="autoplay"></iframe>
        ))}
      </div>
      <Link to="/gallery">
        see more <FaArrowRight />
      </Link>
    </div>
  );
}

export default ConcertImages;

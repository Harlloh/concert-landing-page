import "./ConcertImages.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { archive, currentEvent } from "../../data/event";

function ConcertImages() {
  return (
    <div className="gallery-parent">
      <h3 className="galle">Asher Praise Concert {archive.year} was a success</h3>
      <p>Join us for {currentEvent.theme} in {currentEvent.year}.</p>
      <div className="concert-images-container">
        {archive.galleryImages.slice(0, 1).map((image) => (
          <img key={image} src={image} alt={`Asher Praise Concert ${archive.year}`} className="concert-image" />
        ))}
      </div>
      <Link to="/gallery">
        see more <FaArrowRight />
      </Link>
    </div>
  );
}

export default ConcertImages;

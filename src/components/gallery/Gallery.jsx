import { archive } from "../../data/event";
import "./gallery.css";

function Gallery() {
  return (
    <div className="gallery-parent">
      <h3>Down the memory lane for Asher Praise Concert {archive.year}</h3>
      <div className="concert-images-container">
        {archive.galleryImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Concert Image ${index + 1}`}
            className="concert-image"
            loading="lazy"
          />
        ))}
      </div>
      <p>
        Want to see more?{" "}
        <a href={archive.url} target="_blank" rel="noreferrer">Click here</a>
      </p>
    </div>
  );
}

export default Gallery;

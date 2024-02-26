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
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTU4HGpevxPFU1uKP5lWF-Pyg13qomE55dP4T9uoZjyWKmu9b4TfY7HeITTjXz4PGAp0ZclPP68WfbyJxBRRmQecXjbsg=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQMEJmEe0vt4Gkqzi66RX2ZDcPv3zey3MA3Imx99gKuuqXyVGWOigqXLL6JPXXBeBoToqNg2Va5MFhqHri_IM736Is1=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQgxofBD3QFxR6N3WZu4LGhNxrH_AemDllk2XW8T0tKa1vcPPWoMu7sm1LihThPYGg_G-aj0d8qZsqv860c2sF1PULLNA=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTCRzgteRftr8AIZM5O5WlXrL5NKVJOi2051otCfbJsw9ikRSCovH6J9o8tgcWrJLcqeXKQYOEuGpTMNykTFPG485k5=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSSMzq_epdz5QrRuOFRfcK-lO7i_35oz3fX27FHs5a-VLXWTTucYtx6rRzK8pHPibGNfffNMV2AqfVxcx7hm3vxXAZswg=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSY_RmFHqS1WHt0N0uMNLSxM1go7Bo29qOtm4Ij2_jpu9UbWiPpB_LmHcqTKDWYKp5G11Z3jCu_i5ciXw8X8PnzbOP6=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSFX3Lgp5F96uQeuIDHgfz9q0fu3uLSqtnhnttloHhwRCphsqU-7nhDM_MWsEZO-TqoOHz-0f7CKdbUn5zBBGYRDitKWQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRve6iZvMJvUfaiIErp0wRQISMZ9ef2EnJfDmPJkrPpoN444TvWYEvi28h4XdqvwTrzxleCyFtcJyHTGr9IX1tdOu71RA=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRHRpY2jjavpUdVrSNv6iaN-7pK7RMrL11jb2SsLwuer8AzZDgoq4SQbB9CRTb_v7Xlxw2B4bVKTGIoFjpNdJjFMzbabQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTgLhB1vZ3Q5GY1tqXshc0s6X-4sftUybwl5Mx8L71zJh7PQO2X81iFB20FLk0o3jQTpiw2wlamUGpMfavu7MT1oMbHKQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQxPWaC_e-qa1srIsPL1QOA4CpHZaqL6WZVH0kV1Cb4Dx8elqqOF_9StgHwz55rVTIkZUrmFuAPA73rni5FT6GXCov_=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ4OWuewWjooKCYZnv5YZMkSlGdFTtOXUIImgyci2ZXTr9EsByOEmfR0OIe2zKhMT0kSmr08uEeAVKhjVPewixXly-hiQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRXr4WAron5UGNMjapWHasNBkU3R0JnZeOAfJc2ie3xB1WZEesJvQei24CbbAuKPB4aLZQqSUHIHRoozRdP8gjrNXBRpQ=s1600",

    // Add more links as needed
  ];
  return (
    <div className="gallery-parent">
      <h3>ASHER CONCERT 2023 was a success</h3>
      <div className="concert-images-container">
        {concertImageLinks.map((link, index) => (
          <img
            key={index}
            src={link}
            alt={`Concert Image ${index + 1}`}
            className="concert-image"
          />
        ))}
      </div>
      <Link to="/gallery">
        see more <FaArrowRight />
      </Link>
    </div>
  );
}

export default ConcertImages;

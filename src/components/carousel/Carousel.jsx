// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import bg1 from "../../assets/terren-hurst-KU66acygwIY-unsplash.jpg";
// import bg2 from "../../assets/edward-cisneros-QSa-uv4WJ0k-unsplash.jpg";
// import bg4 from "../../assets/xan-griffin-eA2t5EvcxU4-unsplash.jpg";
import "./carousel.css";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import Countdown from "../../hooks/countdown";
import RevealSection from "../revealAnimation";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <RevealSection>
      <Swiper
        autoplay={{
          delay: 3000, // Set the delay in milliseconds (5 seconds in this case)
          disableOnInteraction: false, // Allow user interaction to stop autoplay
        }}
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="swiperslide swiperslide1">
          {/* <h1>helooooo</h1> */}
          <div className="swipe-text">
            <h2 className="reveal fade-right lagos">JOIN US TODAY</h2>
            <a
              href="#register"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <p>click the link below</p>
              <Link className="text-white cursor-pointer" to="https://youtube.com/live/dCAWllvGafo?feature=share">
                JOIN US LIVE
              </Link>
            </a>
            <Countdown className="counting" />
          </div>
          {/* <img className="swiper-slide-img" src={bg1} /> */}
        </SwiperSlide>
        <SwiperSlide className="swiperslide2">
          <div className="swipe-text">
            <h2 className="reveal fade-left lagos">JOIN US TODAY</h2>
            <p>click the link below</p>

            <Link className="text-white cursor-pointer" to="https://youtube.com/live/dCAWllvGafo?feature=share">
              JOIN US LIVE
            </Link>
            <Countdown className="counting" />
            {/* <p>Freudes place maryland ikeja lagos, Lagos state.</p> */}
          </div>
          {/* <img className="swiper-slide-img" src={bg3} /> */}
        </SwiperSlide>
      </Swiper>
    </RevealSection>
  );
}

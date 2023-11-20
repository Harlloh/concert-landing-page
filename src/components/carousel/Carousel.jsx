// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import bg1 from "../../assets/terren-hurst-KU66acygwIY-unsplash.jpg";
// import bg2 from "../../assets/edward-cisneros-QSa-uv4WJ0k-unsplash.jpg";
// import bg3 from "../../assets/edwin-andrade-6liebVeAfrY-unsplash.jpg";
// import bg4 from "../../assets/xan-griffin-eA2t5EvcxU4-unsplash.jpg";
import "./carousel.css";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <Swiper
      autoplay={{
        delay: 3000, // Set the delay in milliseconds (5 seconds in this case)
        disableOnInteraction: false, // Allow user interaction to stop autoplay
      }}
      spaceBetween={30}
      effect={"fade"}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="swiperslide swiperslide1">
        {/* <h1>helooooo</h1> */}
        <div className="swipe-text">
          <h2>LAGOS</h2>
          <p>ARE YOU READY?</p>
        </div>
        {/* <img className="swiper-slide-img" src={bg1} /> */}
      </SwiperSlide>
      <SwiperSlide className="swiperslide2">
        <div className="swipe-text">
          <h2>LAGOS</h2>
          <p>Save the date for</p>
          <p className="text-white text-5">ASHER PRAISE CONCERT</p>
          {/* <p>Freudes place maryland ikeja, Lagos state.</p> */}
        </div>
        {/* <img className="swiper-slide-img" src={bg3} /> */}
      </SwiperSlide>

      <SwiperSlide className="swiperslide3">
        <div className="swipe-text" style={{ zIndex: "2" }}>
          <h2>LAGOS</h2>
          <p className="text-white">
            Join us for an unforgettable journey filled with joy, music, and
            community spirit in God&apos;s presence.
          </p>
        </div>
        {/* <div className="overlay"></div> */}
        {/* <img className="swiper-slide-img" src={bg4} /> */}
      </SwiperSlide>
      {/* <Countdown /> */}
    </Swiper>
  );
}

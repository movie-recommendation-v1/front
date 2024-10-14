import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./Home.scss";
import play from "../../assets/images/play-circle.svg";
const Home = () => {
  return (
    <div className="Home">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
        }}
        speed={1000}
      >
        <SwiperSlide className="home-banner">
          <div className="container">
            <h2>Solaris Synchrony: a Celestial Odyssey of Hope and Harmony</h2>
            <p>
              Against the backdrop of a dying Earth, a group of scientists races
              to execute a daring plan to synchronize the consciousness of
              humanity with a new solar system. "Solaris Synchrony" is a
              gripping tale of sacrifice, hope, and the unyielding spirit of
              exploration.
            </p>
            <button className="btn1">
              Watch Now{" "}
              <span>
                <img src={play} alt="" />
              </span>
            </button>
            <button className="btn2">More Info</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="home-banner2">
          <div className="container">
            <h2>Discover the New Frontiers of Science</h2>
            <p>
              Journey through uncharted territories and explore the mysteries of
              the universe.
            </p>
            <button>
              Watch Now <img src={play} alt="" />
            </button>
            <button>More Info</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="home-banner3">
          <div className="container">
            <h2>A Call to Humanity: Unite and Explore</h2>
            <p>
              Join the quest for knowledge and the future of humanity among the
              stars.
            </p>
            <button>
              Watch Now <img src={play} alt="" />
            </button>
            <button>More Info</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;

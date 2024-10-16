import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./Home.scss";
import play from "../../assets/images/play-circle.svg";
import Categories from "../categories/Categories";
import New from "../new/New";
import Subscribe from "../subscribe/Subscribe";
const Home = () => {
  return (
    <div className="Home">
      <div className="banner">
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
          <SwiperSlide className="banner banner-1">
            <div className="container">
              <h2>
                Solaris Synchrony: a Celestial Odyssey of Hope and Harmony
              </h2>
              <p>
                Against the backdrop of a dying Earth, a group of scientists
                races to execute a daring plan to synchronize the consciousness
                of humanity with a new solar system. "Solaris Synchrony" is a
                gripping tale of sacrifice, hope, and the unyielding spirit of
                exploration.
              </p>
              <div className="button-group">
                <button className="btn-primary">
                  Watch Now
                  <img src={play} alt="Play" />
                </button>
                <button className="btn-outline">More Info</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner banner-2">
            <div className="container">
              <h2>Discover the New Frontiers of Science</h2>
              <p>
                Journey through uncharted territories and explore the mysteries
                of the universe.
              </p>
              <div className="button-group">
                <button className="btn-primary">
                  Watch Now
                  <img src={play} alt="Play" />
                </button>
                <button className="btn-outline">More Info</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner banner-3">
            <div className="container">
              <h2>A Call to Humanity: Unite and Explore</h2>
              <p>
                Join the quest for knowledge and the future of humanity among
                the stars.
              </p>
              <div className="button-group">
                <button className="btn-primary">
                  Watch Now
                  <img src={play} alt="Play" />
                </button>
                <button className="btn-outline">More Info</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="categories">
        <Categories />
      </div>
      <div className="news">
        <New />
      </div>
      <div className="subscribe">
          <Subscribe/>
      </div>
    </div>
  );
};

export default Home;

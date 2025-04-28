import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Ceditor from "../../img/Ceditor.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      {/* <span style={{ fontSize: 15, textAlign: "center" }}>
        Basic Websites(find on spexcher.github.io/eng, ceditor.vercel.app) ,More
        incoming !
      </span> */}

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {/* <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide> */}
        <SwiperSlide>
          <a href="https://ceditor.vercel.app">x
            <img src={Ceditor} alt="" />
          </a>
        </SwiperSlide>
        
        <SwiperSlide>
          <a href="#">
            <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://spexcher.github.io/eng">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;

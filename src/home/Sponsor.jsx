import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import sponsorImage01 from "../assets/images/sponsor/01.png";
import sponsorImage02 from "../assets/images/sponsor/02.png";
import sponsorImage03 from "../assets/images/sponsor/03.png";
import sponsorImage04 from "../assets/images/sponsor/04.png";
import sponsorImage05 from "../assets/images/sponsor/05.png";
import sponsorImage06 from "../assets/images/sponsor/06.png";

const sponsorList = [
  {
    imgUrl: sponsorImage01,
  },
  {
    imgUrl: sponsorImage02,
  },
  {
    imgUrl: sponsorImage03,
  },
  {
    imgUrl: sponsorImage04,
  },
  {
    imgUrl: sponsorImage05,
  },
  {
    imgUrl: sponsorImage06,
  },
];

const Sponsor = () => {
  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {sponsorList.map((val, index) => (
                <SwiperSlide key={index}>
                  <div className="aponsor-item">
                    <div className="sponsor-thumb">
                      <img src={val.imgUrl} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;

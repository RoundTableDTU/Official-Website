import React, { useState, useRef } from "react";

type Props = {};

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
// import "./styles.css";

const slides = [
  `/assets/images/carouselImages/1.jpg`,
  `/assets/images/carouselImages/2.jpg`,
  `/assets/images/carouselImages/3.jpg`,
];

const renderCarouselSlides = slides.map((slide, index) => {
  return (
    <SwiperSlide
      key={index}
      style={{ backgroundImage: `url(${slide})` }}
      className="carousel-item relative w-full overflow-hidden"
    />
  );
});

const Carousel = (props: Props) => {
  return (
    <div className="relative w-full h-full object-center flex">
      <>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper flex items justify-center"
        >
          {/* {renderCarouselSlides} */}
          <SwiperSlide className="text-white">sex</SwiperSlide>
          <SwiperSlide className="text-white">sex</SwiperSlide>
          <SwiperSlide className="text-white">sex</SwiperSlide>
          <SwiperSlide className="text-white">sex</SwiperSlide>
          <SwiperSlide className="text-white">sex</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;

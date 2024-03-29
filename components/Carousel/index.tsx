import React, { useState, useRef } from "react";
import { slides } from "../../utility/roundtableText";

type Props = {};

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image"
// import "./styles.css";

const renderCarouselSlides = slides.map((slide, index) => {
  return (
    <SwiperSlide
      className="text-white h-2/3 flex items-center justify-center relative"
      key={index}
    >
      <div className="absolute md:left-36 px-12 md:px-0 flex flex-col gap-3 md:gap-16 z-10 md:w-1/2">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-7xl md:pt-10 font-bold">{slide.title}</h1>
          <h1 className="text-2xl md:text-5xl font-bold">{slide.mediumTitle}</h1>
        </div>
        <h1 className="text-lg md:text-2xl md:-mt-8">{slide.text}</h1>
      </div>
      <div className="h-full w-full absolute z-[2] bg-[#1f0909]/[0.5]"></div>
      <Image height={1080}
      width={1920}
        src={slide.image}
        alt="first image"
        className="w-full h-full  object-cover"
      />
    </SwiperSlide>
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
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay]}
          className="mySwiper flex items justify-center"
        >
          {renderCarouselSlides}
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;

import React, { useEffect, useState } from "react";

type Props = {};

const slides = [
  `/assets/images/carouselImages/1.jpg`,
  `/assets/images/carouselImages/2.jpg`,
  `/assets/images/carouselImages/3.jpg`,
];

const renderCarouselSlides = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return slides.map((slide, index) => {
    return (
      <div
        key={index}
        id={`slide${index + 1}`}
        style={{ backgroundImage: `url(${slide})` }}
        className="carousel-item relative w-full overflow-hidden"
      >
        {/* <img src={slide} className=" w-[50rem] md:w-full" /> */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href={
              slideIndex === 0
                ? `#slide${slides.length}`
                : `#slide${slideIndex}`
            }
            className="btn btn-circle"
            onClick={() => setSlideIndex(index)}
          >
            ❮
          </a>
          <a
            href={
              slideIndex === slides.length - 1
                ? `#slide${1}`
                : `#slide${slideIndex + 2}`
            }
            className="btn btn-circle"
            onClick={() => setSlideIndex(index)}
          >
            ❯
          </a>
        </div>
      </div>
    );
  });
};

const CarouselNew = (props: Props) => {
  return (
    <div className="carousel w-full h-[90%] md:h-full">
      {renderCarouselSlides()}
    </div>
  );
};

export default CarouselNew;

/* <div id="slide1" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>*/

import React, { useEffect, useRef, useState } from "react";

import { v4 } from "uuid";
import { register } from "swiper/element/bundle";

register();

import "./Carousel.css";

const Carousel = ({ elements }) => {
  const swiperElRef = useRef(null);
  // const [numberOfSlides, setNumberOfSlides] = useState("1");

  // For testing carousel changing mobile/desktop with project running, refresh the page to get results.
  const numberOfSlides = window
    ? window.innerWidth >= 920
      ? "3"
      : window.innerWidth >= 650
      ? "2"
      : "1"
    : "1";

  const carouselList = elements.map((El) => {
    const id = v4();

    return (
      <swiper-slide class='flex justify-center' key={id}>
        {El}
      </swiper-slide>
    );
  });

  // useEffect(() => {
  //   if (typeof window !== "undefined")
  //     setNumberOfSlides(window.innerWidth >= 768 ? "3" : "1");
  // }, []);

  return (
    <div className='absolute w-4/5 lg:w-full max-w-[inherit]'>
      <swiper-container
        ref={swiperElRef}
        slides-per-view={numberOfSlides}
        breakpoint={{ 768: { slidesPerView: 3 } }}
        navigation='.my-swiper-button'
        class='carousel-container'>
        {carouselList}
      </swiper-container>
    </div>
  );
};

export default Carousel;

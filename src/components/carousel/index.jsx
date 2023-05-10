import React, { useEffect, useRef } from "react";

import { v4 } from "uuid";
import { register } from "swiper/element/bundle";

register();

import "./Carousel.css";

const Carousel = ({ elements }) => {
  const swiperElRef = useRef(null);

  // For testing carousel changing mobile/desktop with project running, refresh the page to get results.
  const numberOfSlides = window.innerWidth >= 768 ? "3" : "1";

  const carouselList = elements.map((El) => {
    const id = v4();

    return (
      <div key={id} className='carrusel'>
        {El}
      </div>
    );
  });

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view={numberOfSlides}
      breakpoint={{ 768: { slidesPerView: 3 } }}
      navigation='true'>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
    </swiper-container>
  );
};

export default Carousel;

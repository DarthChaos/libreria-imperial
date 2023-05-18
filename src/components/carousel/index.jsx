import React, { useEffect, useRef } from "react";

import { v4 } from "uuid";
import { register } from "swiper/element/bundle";

register();

import "./Carousel.css";

const Carousel = ({ elements }) => {
  const swiperElRef = useRef(null);

  const carouselList = elements.map((El) => {
    const id = v4();

    return (
      <swiper-slide class='flex justify-center' key={id}>
        {El}
      </swiper-slide>
    );
  });

  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: true,
      breakpoints: {
        650: {
          slidesPerView: 2,
        },
        920: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className='absolute w-4/5 lg:w-full max-w-[inherit]'>
      <swiper-container
        ref={swiperElRef}
        init='false'
        class='carousel-container'>
        {carouselList}
      </swiper-container>
    </div>
  );
};

export default Carousel;

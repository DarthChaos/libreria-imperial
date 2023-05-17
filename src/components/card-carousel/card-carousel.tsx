import React, { useMemo } from "react";
import Carousel from "../carousel";
import Cards from "./cards";

export type CardCarouselProps = {
  title?: string;
  items:
    | []
    | {
        id: string;
        title: string;
        desc: string;
        image: string;
        tag?: string | boolean;
      }[];
};

const CardCarousel = ({ title, items }: CardCarouselProps) => {
  const cards = useMemo(() => Cards({ items }), [items]);

  return (
    <>
      {title && (
        <h2 className='text-primary-white font-semibold text-4xl text-center mb-8'>
          {title}
        </h2>
      )}
      <div className='mx-8 max-w-[800px] h-[420px] flex justify-center md:mx-auto'>
        <Carousel elements={cards} />
      </div>
    </>
  );
};

export default CardCarousel;

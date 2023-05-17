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
  className?: string;
  titleClassName?: string;
  mainRoute: string;
};

const CardCarousel = ({
  className,
  title,
  titleClassName,
  items,
  mainRoute,
}: CardCarouselProps) => {
  const newItems = items.map(({ id, ...it }) => ({
    href: `${mainRoute}${id}`,
    ...it,
  }));

  const cards = useMemo(() => Cards({ items: newItems }), [items]);
  const titleClass = `text-primary-white font-semibold text-4xl text-center mb-8 ${titleClassName}`;
  const carouselClass = `mx-8 max-w-[800px] h-[420px] flex justify-center md:mx-auto ${className}`;

  return (
    <>
      {title && <h2 className={titleClass}>{title}</h2>}
      <div className={carouselClass}>
        <Carousel elements={cards} />
      </div>
    </>
  );
};

export default CardCarousel;

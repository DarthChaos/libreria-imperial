import React, { memo } from "react";
import { CardCarouselProps } from "./card-carousel";
import { v4 } from "uuid";
import Link from "next/link";
import Card from "../card";

const Cards = ({ items }: CardCarouselProps) => {
  const cards = items.map(({ id, desc, image, tag, title }) => {
    const href = `/comics/${id}`;
    const uuid = v4();

    return (
      <Link key={`carousel-card-${uuid}`} {...{ href }}>
        <Card {...{ tag, title }} description={desc} img={image} />
      </Link>
    );
  });

  return cards;
};

export default Cards;

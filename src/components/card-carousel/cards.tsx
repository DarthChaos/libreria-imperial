import React, { memo } from "react";
import { CardCarouselProps } from "./card-carousel";
import { v4 } from "uuid";
import Link from "next/link";
import Card from "../card";

type CardsProps = {
  title?: string;
  items:
    | []
    | {
        href: string;
        title: string;
        desc: string;
        image: string;
        tag?: string | boolean;
      }[];
};

const Cards = ({ items }: CardsProps) => {
  const cards = items.map(({ href, desc, image, tag, title }) => {
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

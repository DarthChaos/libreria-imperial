import Image from "next/image";
import React from "react";
import Tag from "../tag";

const Card = ({ description, img, tag, title, imgAlt = "Card" }: CardProps) => {
  const hasTag = typeof tag !== "boolean";

  return (
    <div className='h-[410px] w-[234px] relative'>
      <div className='aspect-[1] max-w-[234px] max-h-[234px]'>
        <Image
          className='max-h-[inherit] object-cover'
          src={img}
          alt={imgAlt}
          fill
        />
      </div>
      <div className='h-1 w-full border-0 bg-primary-red-3' />
      <div className='bg-primary-gray-1 p-3 h-full'>
        <div className='flex justify-end mb-3'>
          {hasTag && <Tag label={tag} />}
        </div>
        <h3 className='text-xl font-semibold line-clamp-1 mb-2'>{title}</h3>
        <p className='line-clamp-5 leading-4 text-sm text-primary-black'>
          {description ?? "No description."}
        </p>
      </div>
    </div>
  );
};

export default Card;

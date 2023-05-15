import Image from "next/image";
import React from "react";

import { UsdCoin, Like1, BagTick } from "iconsax-react";
import BlackContainer from "@/components/containers/black-container";

type DescriptionProps = {
  title: string;
  description?: string;
  img: string;
  imgAlt?: string;
  publishDate: string;
};

const Description = ({
  title,
  img,
  description = "",
  publishDate,
  imgAlt,
}: DescriptionProps) => {
  const alt = imgAlt || "comic cover";

  return (
    <BlackContainer>
      <div className='grid gap-x-8 md:grid-cols-2'>
        <h1 className='text-[32px] font-bold text-center mb-2 md:hidden'>
          {title}
        </h1>
        <div className='-z-10 aspect-[375/484] w-full h-auto max-w-[375px] mx-auto relative'>
          <Image className='object-cover' {...{ alt }} src={img} fill />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-[32px] font-bold text-center hidden mb-10 md:block'>
            {title}
          </h1>
          <p className='mt-8 text-xs font-normal text-primary-gray-1 mb-auto'>
            Published {publishDate}
          </p>
          <p className='text-base font-normal mb-12 leading-[1.1rem]'>
            {description}
          </p>
        </div>
      </div>
    </BlackContainer>
  );
};

export default Description;

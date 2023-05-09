import Image from "next/image";
import React from "react";
import Tag from "../tag";

const Card = () => {
  return (
    <div className='h-[410px] w-[234px] relative'>
      <div className='aspect-[1] max-w-[234px] max-h-[234px]'>
        <Image src='/img.img' alt='test' fill />
      </div>
      <div className='h-1 w-full border-0 bg-primary-red-3' />
      <div className='bg-primary-gray-1 p-3'>
        <div className='flex justify-end mb-3'>
          <Tag label='2008' />
        </div>
        <h3 className='text-xl font-medium mb-2'>Title</h3>
        <p className='line-clamp-5 leading-4 text-sm'>
          It's up to the Initiative to face off against the first major Skrull
          strike force! And on the battle field, the cadet with the biggest
          secret has to choose which side he's really on...
        </p>
      </div>
    </div>
  );
};

export default Card;

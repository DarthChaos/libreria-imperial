"use client";

import NumberInput from "@/components/input/number-input";
import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <>
      <div className='w-full bg-primary-white border-none h-0.5 mt-5 mb-4' />
      <div className='flex gap-4'>
        <div>
          <div className='-z-10 aspect-[375/484] h-auto w-[130px] md:w-[100px] mx-auto relative'>
            <Image
              className='object-cover'
              src='/img.img'
              alt='alt'
              //  {...{ alt }} src={img}
              fill
            />
          </div>
        </div>
        <div className='text-primary-white flex flex-col md:gap-6 md:justify-between md:flex-row w-full '>
          <h3 className='max-w-[450px] mt-2 mb-auto font-semibold text-xl line-clamp-2 md:my-auto'>
            Product
          </h3>
          <div className='text-base md:grid md:grid-cols-3 md:w-80'>
            <div className='flex justify-between mb-5 md:my-auto md:justify-center'>
              <span className='md:hidden'>Cost by Unit:</span>
              <span>$ 5.99</span>
            </div>
            <div className='mx-auto justify-center flex flex-col flex-wrap content-center md:my-auto md:translate-y-0.5'>
              <span className='text-base mx-auto md:hidden'>Number</span>
              <NumberInput />
            </div>
            <div className='justify-between mb-5 hidden text-center md:my-auto md:justify-center md:inline-block'>
              $ 5.99
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-4 md:hidden mt-6'>
        <span className='ml-auto w-[80px] text-right'>Subtotal</span>
        <span className='mr-auto'>$ 5.99</span>
      </div>
    </>
  );
};

export default CartItem;

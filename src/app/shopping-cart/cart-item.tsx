"use client";

import NumberInput from "@/components/input/number-input";
import { BagCross1 } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { shoppingCartItem } from "../app-redux/features/shopping-cart/shoppingCart";

type CartItemProps = {
  id: number;
  img: string;
  name: string;
  uPrice: number;
  tPrice: number;
};

const CartItem = ({ id, img, name, tPrice, uPrice }: CartItemProps) => {
  const onDeleteClick = () => {};

  return (
    <>
      <div className='w-full bg-primary-white border-none h-0.5 mt-5 mb-4' />
      <div className='flex gap-4 relative'>
        <div>
          <div className='-z-10 aspect-[375/484] h-auto w-[130px] md:w-[100px] mx-auto relative'>
            <Image
              className='object-cover'
              src={img}
              alt='cover to buy'
              //  {...{ alt }} src={img}
              fill
            />
          </div>
        </div>
        <div className='text-primary-white flex flex-col md:gap-6 md:justify-between md:flex-row w-full '>
          <h3 className='max-w-[90%] md:max-w-[380px] xl:max-w-[450px] mt-2 mb-auto font-semibold text-xl line-clamp-2 md:my-auto'>
            {name}
          </h3>
          <div className='md:grid md:grid-cols-3 md:w-80'>
            <div className='flex justify-between mb-5 md:my-auto md:justify-center'>
              <span className='md:hidden'>Cost by Unit:</span>
              <span>$ {uPrice}</span>
            </div>
            <div className='mx-auto justify-center flex flex-col flex-wrap content-center md:my-auto md:translate-y-0.5'>
              <span className='text-base mx-auto md:hidden'>Number</span>
              <NumberInput />
            </div>
            <div className='justify-between mb-5 hidden text-center md:my-auto md:justify-center md:inline-block'>
              $ {tPrice}
            </div>
          </div>
        </div>
        <button className='bg-primary-transparent border-none absolute top-0 right-0'>
          <BagCross1 size='30' color='#fff' variant='Bold' />
        </button>
      </div>
      <div className='flex gap-4 md:hidden mt-6'>
        <span className='ml-auto w-[80px] text-right'>Subtotal</span>
        <span className='mr-auto'>$ {tPrice}</span>
      </div>
    </>
  );
};

export default CartItem;

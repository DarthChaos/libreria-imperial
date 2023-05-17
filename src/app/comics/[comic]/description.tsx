import Image from "next/image";
import React from "react";

import { UsdCoin, Like1, BagTick } from "iconsax-react";
import BlackContainer from "@/components/containers/black-container";
import { useDispatch } from "react-redux";
import { addNewItem } from "@/app/app-redux/features/shopping-cart/shoppingCartSlice";
import { toast } from "react-toastify";

type DescriptionProps = {
  title: string;
  description?: string;
  img: string;
  imgAlt?: string;
  publishDate: string;
  price?: string | null;
  likes?: number;
};

const Description = ({
  title,
  img,
  description = "",
  price = null,
  publishDate,
  imgAlt,
  likes = 0,
}: DescriptionProps) => {
  const dispatch = useDispatch();

  const alt = imgAlt || "comic cover";
  const priceValue = !price ? "Unknown" : `$ ${price} USD`;
  const likeLabel = `${likes} like${likes < 2 ? "s" : ""}`;

  const onCartClick = () => {
    if (price) {
      dispatch(
        addNewItem({
          img,
          name: title,
          uPrice: price || 0,
          tPrice: price || 0,
        }),
      );
    }
  };

  return (
    <BlackContainer>
      <div className='grid gap-x-8 md:grid-cols-2'>
        <h1 className='text-[32px] font-bold text-center mb-2 md:hidden'>
          {title}
        </h1>
        <div className='-z-10 aspect-[375/484] w-full h-auto max-w-[375px] mx-auto relative'>
          <Image {...{ alt }} src={img} fill />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-[32px] font-bold text-center hidden mb-auto md:block'>
            {title}
          </h1>
          <p className='mt-8 mb-10 text-xs font-normal text-primary-gray-1'>
            Published {publishDate}
          </p>
          <p className='text-base font-normal mb-12 leading-[1.1rem]'>
            {description}
          </p>
          <div className='grid grid-cols-3'>
            <div className='col-auto flex flex-col content-center flex-wrap'>
              <div className='flex justify-center'>
                <UsdCoin size='64' color='#FFDF00' variant='Bold' />
              </div>
              <span className='text-center'>{priceValue}</span>
            </div>
            <div className='col-auto flex flex-col content-center flex-wrap'>
              <div className='cursor-pointer flex justify-center'>
                <Like1 size='64' color='#fff' variant='Bold' />
              </div>
              <span className='text-center'>{likeLabel}</span>
            </div>
            <div className='col-auto flex flex-col content-center flex-wrap'>
              <div className='cursor-pointer flex justify-center'>
                <BagTick
                  size='64'
                  color='#fff'
                  variant='Bold'
                  onClick={onCartClick}
                />
              </div>
              <span className='text-center'>Add to Cart</span>
            </div>
          </div>
        </div>
      </div>
    </BlackContainer>
  );
};

export default Description;

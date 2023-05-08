import BreadCrumb from "@/components/breadcrumb";
import Image from "next/image";
import React from "react";

import { UsdCoin, Like1, BagTick } from "iconsax-react";

const ComicProps = {};

const Comic = () => {
  const crumbs = [{ label: "Home", value: "/" }, { label: "Comic Name" }];

  return (
    <>
      <BreadCrumb {...{ crumbs }} />
      <div className='mx-8 mb-10 mt-4 grid gap-x-8 md:grid-cols-2'>
        <h1 className='text-[32px] font-bold text-center mb-2 md:hidden'>
          Title
        </h1>
        <div className='aspect-[375/484] w-full h-auto max-w-[375px] mx-auto relative'>
          <Image src={"/img.img"} alt={"img img"} fill />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-[32px] font-bold text-center hidden mb-auto md:block'>
            Title
          </h1>
          <p className='mt-8 mb-10 text-xs font-normal text-primary-gray-1'>
            Published Month dd, Year
          </p>
          <p className='text-base font-normal mb-12 leading-[1.1rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            posuere urna odio, at rhoncus nisi efficitur ut. Donec in diam
            massa. Nulla faucibus lectus sem, at bibendum risus placerat vel.
            Praesent lobortis pellentesque ipsum, et feugiat mi accumsan eu. In
            ornare feugiat erat, at convallis purus tempor ut.
          </p>
          <div className='grid grid-cols-3'>
            <div className='col-auto flex flex-col content-center flex-wrap'>
              <div className='flex justify-center'>
                <UsdCoin size='64' color='#FFDF00' variant='Bold' />
              </div>
              <span className='text-center'>$ 5.99 USD</span>
            </div>
            <div className='col-auto flex flex-col content-center flex-wrap'>
              <div className='cursor-pointer flex justify-center'>
                <Like1 size='64' color='#fff' variant='Bold' />
              </div>
              <span className='text-center'>1 Like</span>
            </div>
            <div className='col-auto flex flex-col content-center flex-wrap'>
              <div className='cursor-pointer flex justify-center'>
                <BagTick size='64' color='#fff' variant='Bold' />
              </div>
              <span className='text-center'>Add to Cart</span>
            </div>
          </div>
        </div>
      </div>
      <div className='py-11 px-8 mb-10 bg-primary-yellow-2 grid md:grid-cols-3'>
        <div className='flex flex-col justify-center mb-5'>
          <h2 className='font-semibold text-4xl text-center mb-5'>Credits</h2>
          <div className='grid mx-auto'>
            <div className='row-auto grid grid-cols-3 gap-x-4'>
              <div className='col-span-1'>Writter:</div>
              <div className='col-span-2'>Lorem Ipsum.</div>
            </div>
            <div className='row-auto grid grid-cols-3 gap-x-4'>
              <div className='col-span-1'>Inker:</div>
              <div className='col-span-2'>Lorem Ipsum.</div>
            </div>
            <div className='row-auto grid grid-cols-3 gap-x-4'>
              <div className='col-span-1'>Colorist:</div>
              <div className='col-span-2'>Lorem Ipsum.</div>
            </div>
            <div className='row-auto grid grid-cols-3 gap-x-4'>
              <div className='col-span-1'>Penciler:</div>
              <div className='col-span-2'>Lorem Ipsum.</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center mb-5'>
          <h2 className='font-semibold text-4xl text-center mb-5'>
            Characters
          </h2>
          <div className='mx-auto'>Lorem Ipsum (Lorem Ipsum).</div>
        </div>
        <div className='flex flex-col justify-center mb-5'>
          <h2 className='font-semibold text-4xl text-center mb-5'>Cover</h2>
          <div className='grid mx-auto'>
            <div className='row-auto grid grid-cols-3 gap-x-4'>
              <div className='col-span-1'>Penciler:</div>
              <div className='col-span-2'>Lorem Ipsum.</div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-6 flex justify-center bg-primary-gray-2'>
        <h2 className='text-primary-white font-semibold text-4xl'>
          Related Comics
        </h2>
      </div>
    </>
  );
};

export default Comic;

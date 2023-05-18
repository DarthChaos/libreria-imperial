import React, { useState } from "react";

import { HambergerMenu, BagHappy, CloseCircle } from "iconsax-react";

import Image from "next/image";
import NavigationBar from "./navigation-bar";
import Link from "next/link";

const Header = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  const onHamburgerClick = () => {
    setOpenNavBar(true);
  };
  const onCloseClick = () => {
    setOpenNavBar(false);
  };

  return (
    <>
      <header className='h-[70px] px-4 py-5 bg-primary-yellow-2 flex justify-between fixed w-full z-50'>
        <HambergerMenu
          className='w-[30px] md:hidden'
          size={30}
          color='#000000'
          onClick={onHamburgerClick}
        />
        <div className='w-24 h-24 relative cursor-pointer'>
          <Link href='/'>
            <Image
              className='translate-x-7 -mt-8 md:translate-x-0'
              src='/black_complete_logo.svg'
              alt='Librería Imperial'
              fill
            />
          </Link>
        </div>
        <NavigationBar />
        <div className='flex gap-1'>
          <Link href='/shopping-cart'>
            <BagHappy
              className='w-8 my-auto'
              size={30}
              variant='Bold'
              color='#000000'
            />
          </Link>
          <span className='text-sm font-semibold my-auto text-primary-black'>
            Sign In / Log In
          </span>
        </div>
      </header>
      {openNavBar && (
        <div className='z-[100] fixed top-0 left-0 w-screen h-screen flex'>
          <div className='absolute w-full max-w-sm h-screen bg-primary-yellow-2 md:hidden py-8 px-6'>
            <nav className='relative'>
              <CloseCircle
                className='absolute -top-4 -right-1'
                size='32'
                color='#DC0817'
                onClick={onCloseClick}
              />
              <ul
                className='flex flex-col gap-8'
                onClick={() => setTimeout(onCloseClick, 500)}>
                <li className='hover:border-b-2 border-solid border-primary-red-1 text-2xl text-left text-primary-red-1'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='hover:border-b-2 border-solid border-primary-red-1 text-2xl text-left text-primary-red-1'>
                  <Link href='/comics/1308'>Comics</Link>
                </li>
                <li className='hover:border-b-2 border-solid border-primary-red-1 text-2xl text-left text-primary-red-1'>
                  <Link href='/events/116'>Event</Link>
                </li>
                <li className='hover:border-b-2 border-solid border-primary-red-1 text-2xl text-left text-primary-red-1'>
                  <Link href='/characters/1011334'>Characters</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className='-z-10 opacity-60 bg-primary-gray-2 w-screen h-screen'
            onClick={onCloseClick}
          />
        </div>
      )}
    </>
  );
};

export default Header;

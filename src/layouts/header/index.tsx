import React, { useState } from "react";

import { HambergerMenu, BagHappy } from "iconsax-react";

import Image from "next/image";
import NavigationBar from "./navigation-bar";
import Link from "next/link";

const Header = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <header className='h-[70px] px-4 py-5 bg-primary-yellow-2 flex justify-between fixed w-full'>
      <HambergerMenu className='w-[30px] md:hidden' size={30} color='#000000' />
      <div className='w-24 h-24 relative'>
        <Image
          className='translate-x-7 -mt-8 md:translate-x-0'
          src='/black_complete_logo.svg'
          alt='Librería Imperial'
          fill
        />
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
  );
};

export default Header;

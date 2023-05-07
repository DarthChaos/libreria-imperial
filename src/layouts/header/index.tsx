import React, { useState } from "react";

import { HambergerMenu, BagHappy } from "iconsax-react";

import Image from "next/image";
import NavigationBar from "./navigation-bar";

const Header = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <header className='h-[70px] px-4 py-5 bg-primary-yellow-2 flex justify-between fixed w-full'>
      <HambergerMenu className='w-[30px] md:hidden' size={30} color='#000000' />
      <Image
        className='translate-x-8 md:translate-x-0'
        src='/black_complete_logo.svg'
        alt='Librería Imperial'
        width={100}
        height={46}
      />
      <NavigationBar />
      <div className='flex gap-1'>
        <BagHappy className='w-7 my-auto' variant='Bold' color='#000000' />
        <span className='text-sm font-semibold my-auto'>Sign In / Log In</span>
      </div>
    </header>
  );
};

export default Header;

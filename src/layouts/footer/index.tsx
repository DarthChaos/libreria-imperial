import Image from "next/image";
import React from "react";
import { Facebook, Instagram, Google, Whatsapp } from "iconsax-react";

const Footer = () => {
  return (
    <div className='h-[70px] bg-primary-yellow-2 py-5 px-4 flex justify-between overflow-hidden'>
      <div className='relative w-24 h-24'>
        <Image className='-mt-9' src='black_iso.svg' alt='Lib. Imp.' fill />
      </div>
      <div className='flex flex-col text-center text-xs'>
        <span>Librería Imperial</span>
        <span>2023</span>
      </div>
      <div className='flex gap-1'>
        <Facebook size='25' color='#000000' variant='Bold' />
        <Instagram size='25' color='#000000' variant='Bold' />
        <Google size='25' color='#000000' variant='Bold' />
        <Whatsapp size='25' color='#000000' variant='Bold' />
      </div>
    </div>
  );
};

export default Footer;

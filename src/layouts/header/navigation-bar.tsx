import React from "react";

const NavigationBar = () => {
  return (
    <nav className='hidden md:block translate-y-1'>
      <ul className='flex gap-7 list-none text-primary-red-1 font-semibold text-base'>
        <li className='h-[46px] hover:border-b-2 border-solid border-primary-red-1'>
          <a href='/'>Home</a>
        </li>
        <li className='h-[46px] hover:border-b-2 border-solid border-primary-red-1'>
          <a href='/comics/82967'>Comics</a>
        </li>
        <li className='h-[46px] hover:border-b-2 border-solid border-primary-red-1'>
          <a href='/events/116'>Event</a>
        </li>
        <li className='h-[46px] hover:border-b-2 border-solid border-primary-red-1'>
          <a href='/character/1011334'>Characters</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

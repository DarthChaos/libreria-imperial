import Link from "next/link";
import React from "react";

type NavigationBarProps = {
  showNavBar?: boolean;
};

const NavigationBar = ({ showNavBar = false }: NavigationBarProps) => {
  const navBarClass = `md:block translate-y-1 ${
    showNavBar ? "block" : "hidden"
  }`;

  return (
    <nav className={navBarClass}>
      <ul className='flex gap-7 list-none text-primary-red-1 font-semibold text-base flex-col md:flex-row'>
        <li className='h-[46px] hover:border-b-2 border-solid border-primary-red-1'>
          <Link href='/'>Home</Link>
        </li>
        <li className='h-[46px] hover:border-b-2 border-solid border-primary-red-1'>
          <Link href='/comics/1308'>Comics</Link>
        </li>
        <li className='h-[46px] hover:border-b-2 border-solid border-primary-red-1'>
          <Link href='/events/116'>Event</Link>
        </li>
        <li className='h-[46px] hover:border-b-2 border-solid border-primary-red-1'>
          <Link href='/character/1011334'>Characters</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

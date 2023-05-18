import React from "react";

type LinkedButtonProps = {
  children: string;
  href?: string;
  onClick?: () => void;
};

const LinkedButton = ({ children, href }: LinkedButtonProps) => {
  return (
    <a
      {...{ href }}
      className='text-primary-red-1 decoration-primary-red-1 decoration-[0.5px] decoration-solid underline underline-offset-2 cursor-pointer'>
      {children}
    </a>
  );
};

export default LinkedButton;

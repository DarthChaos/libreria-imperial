import React from "react";
import { ContainerProps } from "./container";

const BlackContainer = ({ children }: ContainerProps) => {
  return (
    <div className='px-8 mb-10 mt-4 max-w-[900px] md:mx-auto'>{children}</div>
  );
};

export default BlackContainer;

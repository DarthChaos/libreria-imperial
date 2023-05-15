import React from "react";
import { ContainerProps } from "./container";

const YellowContainer = ({ children }: ContainerProps) => {
  return <div className='bg-primary-yellow-2 py-11 px-8 mb-10'>{children}</div>;
};

export default YellowContainer;

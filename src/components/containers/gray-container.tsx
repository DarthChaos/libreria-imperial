import React from "react";
import { ContainerProps } from "./container";

const GrayContainer = ({ children }: ContainerProps) => {
  return <div className='px-auto py-4 mb-10 bg-primary-gray-2'>{children}</div>;
};

export default GrayContainer;

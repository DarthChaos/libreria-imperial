"use client";

import React, { FormEvent } from "react";
import { TextAreaProps } from "./input.d";

const TextArea = ({ label, onChange, textAreaRef }: TextAreaProps) => {
  const onAreaChange = ({
    currentTarget: { value },
  }: FormEvent<HTMLTextAreaElement>) => {
    onChange && onChange(value);
  };

  return (
    <>
      <span>{label}</span>
      <textarea
        ref={textAreaRef}
        className='mt-3 border-2 border-solid w-full p-1 text-xs bg-primary-red-1 text-primary-black border-primary-white placeholder:text-primary-black'
        placeholder='Add some text here (optional)'
        onChange={onAreaChange}
      />
    </>
  );
};

export default TextArea;

"use client";

import React, { FormEvent, useEffect, useState } from "react";

type NumberInputProps = {
  onChange?: (v: number) => void;
};

const NumberInput = ({ onChange }: NumberInputProps) => {
  const [value, setValue] = useState(1);

  const decrease = () => {
    setValue((prevValue) => (prevValue > 1 ? prevValue - 1 : 1));
  };
  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const onNumberChange = ({
    currentTarget: { value },
  }: FormEvent<HTMLInputElement>) => {
    const v = +value;

    setValue(v < 1 ? 1 : v);
  };

  useEffect(() => {
    onChange && onChange(value);
  }, [value, onChange]);

  return (
    <div>
      <div className='bg-primary-gray-2 w-28 h-10 mb-2 flex justify-between'>
        <button
          className='text-primary-white opacity-75 h-full px-2'
          onClick={decrease}>
          -
        </button>
        <input
          {...{ value }}
          type='number'
          className='bg-primary-transparent w-[60px] text-center focus-visible:border-none'
          onChange={onNumberChange}
          min='1'
        />
        <button
          className='text-primary-white opacity-75 h-full px-2'
          onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default NumberInput;

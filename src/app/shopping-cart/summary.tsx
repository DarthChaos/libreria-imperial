import Button from "@/components/button/button";
import TextArea from "@/components/input/textarea";
import React from "react";

const Summary = () => {
  return (
    <div className='flex flex-col md:flex-row mt-6'>
      <div className='w-full max-w-[380px] mb-7 md:w-1/3'>
        <TextArea label='Add order notes:' />
      </div>
      <div className='flex flex-col md:ml-auto'>
        <div className='w-[250px] grid grid-cols-4 text-primary-white gap-y-7'>
          <div className='col-span-3'>Estimate Shipping:</div>
          <div>3 weeks</div>
          <div className='col-span-3'>Total (with ship and taxes):</div>
          <div>$ 14.99</div>
        </div>
        <Button className='self-center mt-9 md:self-end'>Check Out</Button>
      </div>
    </div>
  );
};

export default Summary;

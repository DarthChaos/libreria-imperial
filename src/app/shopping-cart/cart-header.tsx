import React from "react";

const CartHeader = () => {
  return (
    <>
      <h1 className='text-[32px] font-bold text-center mb-2'>
        {/* {title} */}
        Shopping Cart
      </h1>
      <div className='hidden md:flex justify-between text-primary-white'>
        <div className=''>General Information</div>
        <div className='w-80 grid grid-cols-3'>
          <div className='mx-auto'>Price</div>
          <div className='mx-auto'>Quantity</div>
          <div className='mx-auto'>Subtotal</div>
        </div>
      </div>
    </>
  );
};

export default CartHeader;

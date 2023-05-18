import { RootState } from "@/app/app-redux/store";
import React from "react";
import { useSelector } from "react-redux";

const LoadingSpinner = () => {
  // const {
  //   character: { status: statusCharacter },
  //   comic: { status: statusComic },
  //   comics: { status: statusComics },
  //   event: { status: statusEvent },
  //   events: { status: statusEvents },
  //   shoppingCart: { status: statusCart },
  // } = useSelector((state: RootState) => state);

  const isLoading = false;

  return isLoading ? (
    <div className='w-screen h-screen flex justify-center items-center fixed bg-primary-black bg-opacity-80 z-[101]'>
      <div className='w-20 h-20 border-8 border-solid border-x-primary-yellow-2 border-y-primary-transparent rounded-[50%] animate-spin-anim' />
    </div>
  ) : (
    <></>
  );
};

export default LoadingSpinner;

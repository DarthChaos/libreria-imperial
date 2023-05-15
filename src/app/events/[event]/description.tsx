import Button from "@/components/button/button";
import BlackContainer from "@/components/containers/black-container";
import Image from "next/image";
import React from "react";
import { URL } from "url";

type DescriptionProps = {
  publishDate: string;
  title: string;
  description: string;
  img: string;
  alt?: string;
  wikiUri: URL | null;
  detailsUri: URL | null;
};

const Description = ({
  description,
  detailsUri,
  img,
  publishDate,
  title,
  wikiUri,
  alt = "description",
}: DescriptionProps) => {
  const newWindow = (url: URL) => window.open(url, "_blank");
  const onClick = (url: URL) => {
    newWindow(url);
  };

  return (
    <BlackContainer>
      <p className='mt-8 mb-10 text-xs font-normal text-primary-gray-1'>
        Published
        {publishDate}
      </p>
      <h1 className='text-[32px] font-bold text-center mb-2 md:hidden'>
        {title}
      </h1>
      <p className='text-base font-normal mb-12 leading-[1.1rem]'>
        {description}
      </p>
      <div className='-z-10 aspect-[375/484] w-full h-auto max-w-[720] mx-auto relative mb-6'>
        <Image {...{ alt }} src={img} fill />
      </div>
      <h3 className='font-semibold text-3xl text-primary-white mb-4'>Links</h3>
      <div className='flex justify-between gap-4 md:flex-col'>
        {wikiUri && <Button onClick={() => onClick(wikiUri)}>Wiki</Button>}
        {detailsUri && (
          <Button onClick={() => onClick(detailsUri)}>Detail</Button>
        )}
      </div>
    </BlackContainer>
  );
};

export default Description;

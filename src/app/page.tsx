"use client";

import BlackContainer from "@/components/containers/black-container";
import "./home.css";
import GrayContainer from "@/components/containers/gray-container";
import Image from "next/image";
import LinkedButton from "@/components/button/linked-button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app-redux/store";
import { useEffect } from "react";
import { fetchAllComics } from "./app-redux/features/comics/multiple/comicsSlice";
import CardCarousel from "@/components/card-carousel/card-carousel";
import { fetchAllEvents } from "./app-redux/features/events/multiple/eventsSlice";
import Button from "@/components/button/button";
import { fetchAllCharacters } from "./app-redux/features/characters/charactersSlice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    comics: { comics },
    events: { events },
    character: { characters },
  } = useSelector((state: RootState) => state);
  const comicsToShow = [...comics].splice(1);
  const firstComic = comicsToShow.splice(0, 1)[0] ?? {
    image: "/img.img",
    title: "",
    desc: "",
    id: 0,
  };
  const eventsToShow = [...events].splice(1);
  const firstEvent = eventsToShow.splice(0, 1)[0] ?? {
    image: "/img.img",
    title: "",
    desc: "",
    id: 0,
  };

  useEffect(() => {
    dispatch(fetchAllComics(17));
    dispatch(fetchAllEvents(17));
    dispatch(fetchAllCharacters());
  }, [dispatch]);

  return (
    <>
      <div className='w-screen aspect-[425/300] relative overflow-hidden md:aspect-[1024/440]'>
        <Image
          className='object-cover -z-10 absolute'
          src={firstComic.image}
          alt='home header img'
          fill
        />
        <div className='flex flex-col absolute bottom-0 left-0 w-full max-w-[330px] aspect-[330/150] bg-primary-gray-2 bg-opacity-50 py-4 px-5 text-primary-white text-start md:max-w-[464px] md:aspect-[464/200] md:bottom-5 md:left-12'>
          <h2 className='font-bold text-2xl line-clamp-1 md:text-3xl'>
            {firstComic.title}
          </h2>
          <p className='line-clamp-5 font-normal text-sm mb-auto md:text-base'>
            {firstComic.desc}
          </p>
          <LinkedButton href={`/comics/${firstComic.id}`}>
            More Information
          </LinkedButton>
        </div>
      </div>
      <BlackContainer>
        <CardCarousel
          mainRoute='/comics/'
          title='Comics'
          items={comicsToShow}
        />
      </BlackContainer>
      <GrayContainer>
        <div className='hidden max-w-[900px] mx-auto md:flex md:flex-col'>
          <h2 className='text-primary-white font-semibold text-4xl text-center mb-8'>
            Events
          </h2>
          <div className='mx-20 mb-8 grid grid-cols-12 gap-9'>
            <div className='w-full h-full max-w-[560px] aspect-[560/250] relative col-span-7'>
              <Image
                className='absolute object-cover'
                src={firstEvent.image}
                alt='Main Event'
                fill
              />
            </div>
            <div className='text-primary-white text-start w-full col-span-5'>
              <h3 className='font-semibold text-xl'>Recently Events</h3>
              <h2 className='font-bold text-2xl mb-3'>{firstEvent.title}</h2>
              <p className='mb-auto line-clamp-3 text-sm lg:line-clamp-4'>
                {firstEvent.desc}
              </p>
              <div className='flex justify-end text-primary-black'>
                <Button>Click Here</Button>
              </div>
            </div>
          </div>
        </div>
        <h2 className='text-primary-white font-semibold text-4xl text-center mb-8 hidden md:inline-block'>
          Other Events
        </h2>
        <CardCarousel
          mainRoute='/events/'
          titleClassName='md:hidden'
          title='Events'
          items={eventsToShow}
        />
      </GrayContainer>
      <BlackContainer>
        <CardCarousel
          mainRoute='/characters/'
          title='Characters'
          items={characters}
        />
      </BlackContainer>
    </>
  );
}

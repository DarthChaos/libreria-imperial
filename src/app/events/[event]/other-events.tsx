import { fetchFeaturedEvents } from "@/app/app-redux/features/events/multiple/eventsSlice";
import { AppDispatch, RootState } from "@/app/app-redux/store";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import GrayContainer from "@/components/containers/gray-container";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

type OtherEventsProps = {
  characterId: string;
};

const OtherEvents = ({ characterId }: OtherEventsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { events, status: featuredComicsStatus } = useSelector(
    (state: RootState) => state.events,
  );
  console.log(events);

  const cards = events.map(({ id, desc, image, tag, title }) => {
    const href = `/events/${id}`;
    const uuid = v4();

    return (
      <Link key={uuid} {...{ href }}>
        <Card {...{ tag, title }} description={desc} img={image} />
      </Link>
    );
  });

  useEffect(() => {
    dispatch(fetchFeaturedEvents({ id: characterId, limit: 16 }));
  }, [characterId, dispatch]);

  return (
    <GrayContainer>
      <h2 className='text-primary-white font-semibold text-4xl text-center mb-8'>
        Other Events
      </h2>
      <div className='mx-8 max-w-[800px] h-[420px] flex justify-center md:mx-auto'>
        <Carousel elements={cards} />
      </div>
    </GrayContainer>
  );
};

export default OtherEvents;

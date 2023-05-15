import { RoleNameElement } from "@/app/app-redux/features/comics/single/comic";
import YellowContainer from "@/components/containers/yellow-container";
import React from "react";

type FactsProps = {
  comics: string[];
  events: string[];
  stories: string[];
};

const MAX_ELEMENTS = 10;

const Facts = ({ comics, events, stories }: FactsProps) => {
  const getRenderItems = (items: string[]) =>
    items.slice(0, MAX_ELEMENTS).map((name) => (
      <div key={name} className='mx-auto line-clamp-2'>
        {name}
      </div>
    ));

  const comicsRender = getRenderItems(comics);
  const eventsRender = getRenderItems(events);
  const storiesRender = getRenderItems(stories);

  return (
    <YellowContainer>
      <div className='mx-auto max-w-[900px] grid md:grid-cols-3'>
        <div className='flex flex-col mb-5'>
          <h2 className='font-semibold text-4xl text-center mb-5'>
            Some Comics
          </h2>
          <div className='grid mx-auto'>{comicsRender}</div>
        </div>
        <div className='flex flex-col mb-5'>
          <h2 className='font-semibold text-4xl text-center mb-5'>
            Some Series
          </h2>
          {eventsRender}
        </div>
        <div className='flex flex-col mb-5'>
          <h2 className='font-semibold text-4xl text-center mb-5'>
            Some Stories
          </h2>
          <div className='grid mx-auto'>{storiesRender}</div>
        </div>
      </div>
    </YellowContainer>
  );
};

export default Facts;

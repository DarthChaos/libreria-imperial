import React from "react";

type roleNameElement = { role: string; name: string };
type FactsProps = {
  credits: roleNameElement[];
  cover: roleNameElement[];
  characters: { name: string }[];
};

const Facts = ({ characters, cover, credits }: FactsProps) => {
  const getRenderItems = (items: roleNameElement[]) =>
    items.map(({ role, name }) => (
      <div
        key={`${role}-${name}`}
        className='row-auto grid grid-cols-5 gap-x-4'>
        <div className='col-span-2'>{role}:</div>
        <div className='col-span-3'>{name}.</div>
      </div>
    ));

  const creditsRender = getRenderItems(credits);
  const coverRender = getRenderItems(cover);
  const charactersRender = characters.map(({ name }) => (
    <div key={`${name}`} className='mx-auto'>
      {name}
    </div>
  ));

  return (
    <div className='bg-primary-yellow-2 py-11 px-8 mb-10'>
      <div className='mx-auto max-w-[900px] grid md:grid-cols-3'>
        <div className='flex flex-col mb-5'>
          <h2 className='font-semibold text-4xl text-center mb-5'>Credits</h2>
          <div className='grid mx-auto'>{creditsRender}</div>
        </div>
        <div className='flex flex-col mb-5'>
          <h2 className='font-semibold text-4xl text-center mb-5'>
            Characters
          </h2>
          {charactersRender}
        </div>
        <div className='flex flex-col mb-5'>
          <h2 className='font-semibold text-4xl text-center mb-5'>Cover</h2>
          <div className='grid mx-auto'>{coverRender}</div>
        </div>
      </div>
    </div>
  );
};

export default Facts;

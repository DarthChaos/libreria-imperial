import { fetchFeaturedComics } from "@/app/app-redux/features/comics/multiple/comicsSlice";
import { AppDispatch, RootState } from "@/app/app-redux/store";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

type RelatedComicsProps = {
  characterId: string;
};

const RelatedComics = ({ characterId }: RelatedComicsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { comics, status: featuredComicsStatus } = useSelector(
    (state: RootState) => state.comics,
  );

  const cards = comics.map(({ id, desc, image, tag, title }) => {
    const href = `/comics/${id}`;
    const uuid = v4();

    return (
      <Link key={uuid} {...{ href }}>
        <Card {...{ tag, title }} description={desc} img={image} />
      </Link>
    );
  });

  useEffect(() => {
    dispatch(fetchFeaturedComics({ id: characterId, limit: 16 }));
  }, [characterId, dispatch]);

  return (
    <div className='py-6 mb-10 justify-center bg-primary-gray-2'>
      <h2 className='text-primary-white font-semibold text-4xl text-center mb-8'>
        Related Comics
      </h2>
      <div className='mx-8 max-w-[800px] h-[420px] flex justify-center md:mx-auto'>
        <Carousel elements={cards} />
      </div>
    </div>
  );
};

export default RelatedComics;

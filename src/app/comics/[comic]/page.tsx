"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import type { AppDispatch, RootState } from "../../app-redux/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchComic } from "../../app-redux/features/comics/single/comicSlice";

import Description from "./description";
import Facts from "./facts";
import BreadCrumb from "@/components/breadcrumb";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import { fetchFeaturedComics } from "@/app/app-redux/features/comics/multiple/comicsSlice";
import Link from "next/link";
import { v4 } from "uuid";

const Comic = () => {
  const {
    comic: { characters, cover, credits, desc, image, price, title, update },
    status: comicStatus,
  } = useSelector((state: RootState) => state.comic);
  const { comics, status: featuredComicsStatus } = useSelector(
    (state: RootState) => state.comics,
  );

  const dispatch = useDispatch<AppDispatch>();

  const [_empty, _comics, comic] = usePathname().split("/");

  const crumbs = [{ label: "Home", value: "/" }, { label: "Comic Name" }];

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
    dispatch(fetchComic({ id: comic }));
  }, [comic, dispatch]);
  useEffect(() => {
    if (characters[0]?.id)
      dispatch(fetchFeaturedComics({ id: characters[0].id, limit: 16 }));
  }, [characters, dispatch]);

  return (
    <>
      <BreadCrumb {...{ crumbs }} />
      <Description
        {...{ title, price }}
        img={image}
        publishDate={update}
        description={desc}
      />
      <Facts {...{ characters, cover, credits }} />
      <div className='py-6 mb-10 justify-center bg-primary-gray-2'>
        <h2 className='text-primary-white font-semibold text-4xl text-center mb-8'>
          Related Comics
        </h2>
        <div className='mx-8 max-w-[800px] h-[420px] flex justify-center md:mx-auto'>
          <Carousel elements={cards} />
        </div>
      </div>
    </>
  );
};

export default Comic;

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import type { AppDispatch, RootState } from "../../app-redux/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchComic } from "../../app-redux/features/comics/single/comicSlice";

import Description from "./description";
import Facts from "./facts";
import BreadCrumb from "@/components/breadcrumb";
import RelatedComics from "./related-comics";

const Comic = () => {
  const {
    comic: { characters, cover, credits, desc, image, price, title, update },
    status: comicStatus,
  } = useSelector((state: RootState) => state.comic);
  const lastCharacter = characters[characters.length - 1]?.id || null;

  const dispatch = useDispatch<AppDispatch>();

  const [_empty, _comics, comic] = usePathname().split("/");

  const crumbs = [{ label: "Home", value: "/" }, { label: "Comic Name" }];

  useEffect(() => {
    dispatch(fetchComic({ id: comic }));
  }, [comic, dispatch]);

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
      {lastCharacter && <RelatedComics characterId={lastCharacter} />}
    </>
  );
};

export default Comic;

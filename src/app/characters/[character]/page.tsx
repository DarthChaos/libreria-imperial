"use client";

import { fetchCharacter } from "@/app/app-redux/features/characters/charactersSlice";
import { AppDispatch, RootState } from "@/app/app-redux/store";
import BreadCrumb from "@/components/breadcrumb";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Description from "./description";
import Facts from "./facts";
import RelatedComics from "./related-comics";

const Character = () => {
  const crumbs = [{ label: "Home", value: "/" }, { label: "Comic Name" }];
  const {
    character: { desc, image, title, update, comics, events, stories },
    status: comicStatus,
  } = useSelector((state: RootState) => state.character);

  const dispatch = useDispatch<AppDispatch>();

  const [_empty, _comics, character] = usePathname().split("/");

  useEffect(() => {
    dispatch(fetchCharacter({ id: character }));
  }, [character, dispatch]);

  return (
    <>
      <BreadCrumb {...{ crumbs }} />
      <Description
        {...{ title }}
        img={image}
        publishDate={update}
        description={desc}
      />
      <Facts {...{ comics, events, stories }} />
      <RelatedComics characterId={character} />
    </>
  );
};

export default Character;

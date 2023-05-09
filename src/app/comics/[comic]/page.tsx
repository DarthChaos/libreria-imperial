"use client";

import React, { useEffect, useState } from "react";
import { createHash } from "crypto";
import { usePathname } from "next/navigation";

import type { RootState } from "../../app-redux/store";
import { useSelector, useDispatch } from "react-redux";
import { loadValues } from "../../app-redux/features/comics/single/comicSlice";

import Description from "./description";
import Facts from "./facts";
import BreadCrumb from "@/components/breadcrumb";
import Card from "@/components/card";
import Carousel from "@/components/carousel";

const publicKey = "77989cd1b9b55360e5dad825e78d3f52";
const privateKey = "635de7065008cffc26c33dd559b8ab368220697a";

const Comic = () => {
  const { characters, cover, credits, desc, image, price, title, update } =
    useSelector((state: RootState) => state.comic);
  const dispatch = useDispatch();

  const [_empty, _comics, comic] = usePathname().split("/");

  const crumbs = [{ label: "Home", value: "/" }, { label: "Comic Name" }];

  const cards = [<Card key={1} />, <Card key={2} />, <Card key={2} />];

  useEffect(() => {
    const getData = async () => {
      const api = `https://gateway.marvel.com:443/v1/public/comics/${comic}?limit=1`;
      const timestamp = new Date().toISOString();
      const hash = createHash("md5")
        .update(timestamp + privateKey + publicKey)
        .digest("hex");
      const apiUrl =
        api + "&ts=" + timestamp + "&apikey=" + publicKey + "&hash=" + hash;
      const response = await (await fetch(apiUrl, { method: "GET" })).json();
      const result = response.data.results[0];
      const thumbnail = result.thumbnail;
      const creators = result.creators.items.reduce(
        (acc: { credits: {}[]; cover: {}[] }, { role = "", name = "" }) => {
          const value = { role, name };

          if (role.includes("cover")) acc.cover.push(value);
          else acc.credits.push(value);

          return acc;
        },
        { credits: [], cover: [] },
      );

      dispatch(
        loadValues({
          title: result.title,
          image: `${thumbnail.path}.${thumbnail.extension}`,
          update: new Date(result.modified).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          }),
          desc: result.description,
          price: result.prices[0].price,
          credits: creators?.credits || [],
          characters: result.characters.items.map(({ name = "" }) => ({
            name,
          })),
          cover: creators?.cover || [],
        }),
      );
    };

    getData();
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
      {/* <div className='py-6 justify-center bg-primary-gray-2'>
        <h2 className='text-primary-white font-semibold text-4xl text-center'>
          Related Comics
        </h2>
        <div className='flex justify-center'>
          <Carousel elements={cards} />
        </div>
      </div> */}
    </>
  );
};

export default Comic;

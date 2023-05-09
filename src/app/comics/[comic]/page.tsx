"use client";

import BreadCrumb from "@/components/breadcrumb";
import React, { useEffect, useState } from "react";

import { createHash } from "crypto";
import { usePathname } from "next/navigation";
import Description from "./description";
import Facts from "./facts";

const ComicProps = {};

const publicKey = "77989cd1b9b55360e5dad825e78d3f52";
const privateKey = "635de7065008cffc26c33dd559b8ab368220697a";

const Comic = () => {
  const [data, setData] = useState({
    title: "",
    image: "",
    update: "",
    desc: "",
    price: "",
    credits: [],
    characters: [],
    cover: [],
  });
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [update, setUpdate] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [credits, setCredits] = useState([]);
  const [characters, setCharacters] = useState([]);

  const [_empty, _comics, comic] = usePathname().split("/");

  const crumbs = [{ label: "Home", value: "/" }, { label: "Comic Name" }];

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

      setData({
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
      });
    };

    getData();
  }, [comic]);

  return (
    <>
      <BreadCrumb {...{ crumbs }} />
      <Description
        title={data.title}
        img={data.image}
        publishDate={data.update}
        description={data.desc}
        price={data.price}
      />
      <Facts
        characters={data.characters}
        cover={data.cover}
        credits={data.credits}
      />
      {/* <div className='py-6 flex justify-center bg-primary-gray-2'>
        <h2 className='text-primary-white font-semibold text-4xl'>
          Related Comics
        </h2>
      </div> */}
    </>
  );
};

export default Comic;

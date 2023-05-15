"use client";

import { client } from "@/app/app-redux/api/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ComicState } from "./comic";

export const initialState: ComicState = {
  comic: {
    title: "",
    image: "",
    update: "",
    desc: "",
    price: "",
    credits: [],
    characters: [],
    cover: [],
  },
  status: "idle",
  error: null,
};

export const fetchComic = createAsyncThunk(
  "comic/getComicById",
  async ({ id }: { id: string }) => {
    const response = await client(`comics/${id}`, { limit: "1" }).get();

    return response;
  },
);

export const comicSlice = createSlice({
  name: "comic",
  initialState,
  reducers: {
    loadValues: (_state, action) => ({ ...action.payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComic.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComic.fulfilled, (state, action) => {
        const result = action.payload.data.results[0];
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

        state.status = "succeeded";
        state.comic = {
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
          characters: result.characters.items.map(
            ({ name = "", resourceURI = "" }) => {
              const url = resourceURI.split("/");

              return {
                id: url[url.length - 1],
                name,
              };
            },
          ),
          cover: creators?.cover || [],
        };
      })
      .addCase(fetchComic.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { loadValues } = comicSlice.actions;

export default comicSlice.reducer;

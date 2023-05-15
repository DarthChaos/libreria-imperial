"use client";

import { client } from "@/app/app-redux/api/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ComicsState } from "./comics";

const initialState: ComicsState = {
  comics: [],
  status: "idle",
  error: null,
};

export const fetchFeaturedComics = createAsyncThunk(
  "comic/getComicsByCharacterId",
  async ({ id, limit }: { id: string; limit: number }) => {
    const response = await client(`characters/${id}/comics`, {
      limit: limit.toString(),
    }).get();

    return response;
  },
);

export const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    loadValues: (_state, action) => ({ ...action.payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedComics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFeaturedComics.fulfilled, (state, action) => {
        const results = action.payload.data.results;
        const comics = results.map((res: any) => {
          const thumbnail = res.thumbnail;
          const firstDate = res.dates[0].date;
          const tag = firstDate && new Date(firstDate).getFullYear().toString();

          return {
            id: res.id.toString(),
            title: res.title,
            desc: res.description,
            image: `${thumbnail.path}.${thumbnail.extension}`,
            tag,
          };
        });

        state.status = "succeeded";
        state.comics = comics;
        // state.comics =
      })
      .addCase(fetchFeaturedComics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { loadValues } = comicsSlice.actions;

export default comicsSlice.reducer;

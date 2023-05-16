"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EventState } from "./event";
import { client } from "../../../api/client";

const initialState: EventState = {
  event: {
    date: "",
    title: "",
    desc: "",
    img: "",
    wiki: null,
    detail: null,
    lastCharacter: "",
  },
  status: "idle",
  error: null,
};

export const fetchSingleEvent = createAsyncThunk(
  "comic/getEventById",
  async ({ id }: { id: string }) => {
    const response = await client(`events/${id}`, { limit: "1" }).get();

    return response;
  },
);

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    loadValues: (_state, action) => ({ ...action.payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleEvent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleEvent.fulfilled, (state, action) => {
        const result = action.payload.data.results[0];

        const thumbnail = result.thumbnail;
        const urls = result.urls.reduce(
          (acc: any, cur: { type: string; url: string }) => {
            acc[cur.type] = cur.url;

            return acc;
          },
          {},
        );
        const characters = result.characters.items;
        const lastItem = characters.at(-1).resourceURI.split("/");
        const lastCharacter = lastItem.at(-1);

        state.status = "succeeded";
        state.event = {
          title: result.title,
          img: `${thumbnail.path}.${thumbnail.extension}`,
          date: new Date(result.start).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          }),
          desc: result.description,
          wiki: urls.wiki || null,
          detail: urls.detail || null,
          lastCharacter,
        };
      })
      .addCase(fetchSingleEvent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { loadValues } = eventsSlice.actions;

export default eventsSlice.reducer;

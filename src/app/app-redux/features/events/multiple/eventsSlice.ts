"use client";

import { client } from "@/app/app-redux/api/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EventsState } from "./events";

const initialState: EventsState = {
  events: [],
  status: "idle",
  error: null,
};

export const fetchFeaturedEvents = createAsyncThunk(
  "comic/getEventsByCharacterId",
  async ({ id, limit }: { id: string; limit: number }) => {
    const response = await client(`characters/${id}/events`, {
      limit: limit.toString(),
    }).get();

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
      .addCase(fetchFeaturedEvents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFeaturedEvents.fulfilled, (state, action) => {
        const results = action.payload.data.results;
        const events = results.map((res: any) => {
          const thumbnail = res.thumbnail;
          const firstDate = res.start;
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
        state.events = events;
      })
      .addCase(fetchFeaturedEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { loadValues } = eventsSlice.actions;

export default eventsSlice.reducer;

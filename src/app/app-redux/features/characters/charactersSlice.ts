"use client";

import { client } from "@/app/app-redux/api/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CharacterState } from "./characters";

export const initialState: CharacterState = {
  character: {
    title: "",
    image: "",
    update: "",
    desc: "",
    comics: [],
    events: [],
    stories: [],
  },
  status: "idle",
  error: null,
};

export const fetchCharacter = createAsyncThunk(
  "comic/getCharacterById",
  async ({ id }: { id: string }) => {
    const response = await client(`characters/${id}`, { limit: "1" }).get();

    return response;
  },
);

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    loadValues: (_state, action) => ({ ...action.payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        const result = action.payload.data.results[0];
        const thumbnail = result.thumbnail;

        const comics = result.comics?.items.map(({ name = "" }) => name) || [];
        const events = result.events?.items.map(({ name = "" }) => name) || [];
        const stories =
          result.stories?.items.map(({ name = "" }) => name) || [];

        state.status = "succeeded";
        state.character = {
          title: result.name,
          image: `${thumbnail.path}.${thumbnail.extension}`,
          update: new Date(result.modified).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          }),
          desc: result.description,
          comics,
          events,
          stories,
        };
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { loadValues } = characterSlice.actions;

export default characterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export interface UiSliceType {
  [x: string]: any;
  toggleButton: boolean;
}

const initialState: UiSliceType = {
  toggleButton: false,
};

const UiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNavButton(state) {
      state.toggleButton = !state.toggleButton;
    },
  },
});

export const UiActions = UiSlice.actions;

export default UiSlice;

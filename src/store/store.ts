import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import UiSlice from "./uiReducer";
const store = configureStore({
  reducer: {
    ui: UiSlice.reducer,
    form: formSlice,
  },
});

export default store;

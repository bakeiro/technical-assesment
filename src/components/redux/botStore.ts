import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { configureStore } from "@reduxjs/toolkit";
import { botAPI } from "./botAPI";

export const botStore = configureStore({
  reducer: {
    [botAPI.reducerPath]: botAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(botAPI.middleware),
});

setupListeners(botStore.dispatch);
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./index";

const store = configureStore({
  reducer: {
    productsReducer: productsReducer,
  },
});

export default store;

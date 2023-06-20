import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../stores/RootReducer";

const store = configureStore({
  reducer: RootReducer,
  middleware: (defaultMiddleware) => defaultMiddleware({ serializableCheck: false }),
});

export default store;

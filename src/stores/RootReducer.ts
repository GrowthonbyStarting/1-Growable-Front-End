import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import persistConfig from "../config/PersistConfig";
import persistReducer from "redux-persist/es/persistReducer";

const rootReducer = combineReducers({
  user: UserSlice,
});

export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;

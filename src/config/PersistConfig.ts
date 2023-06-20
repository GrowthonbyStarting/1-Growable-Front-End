import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist";
import { RootState } from "../stores/RootReducer";

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["user"],
};

export default persistConfig;

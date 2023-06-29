import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import MainRouter from "./pages/router/MainRouter";
import { persistStore } from "redux-persist";
import store from "./config/StoreConfig";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./styles/main.scss";
import { injectStore } from "./config/AxiosConfig";

const persistor = persistStore(store);
injectStore(store);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainRouter />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

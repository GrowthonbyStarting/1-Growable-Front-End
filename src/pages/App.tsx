import React, { ReactElement } from "react";
import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";

const App = (): ReactElement => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;

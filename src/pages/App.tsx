import React, { ReactElement, useEffect } from "react";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";

const App = (): ReactElement => {
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    navigate("/about");
  }, []);

  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;

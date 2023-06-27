import React, { ReactElement, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";

const App = (): ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/about");
    }
  }, [location, navigate]);

  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
export default App;

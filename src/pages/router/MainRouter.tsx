import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Challenge from "../Challenge";
import About from "../About";

const MainRouter = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="challenge" element={<Challenge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;

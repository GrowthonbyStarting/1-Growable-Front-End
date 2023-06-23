import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Challenge from "../Challenge";
import About from "../About";
import KakaoRedirect from "../KakaoRedirect";
import Login from "../Login";
import MentorInfo from "../MentorInfo";
import MenteeInfo from "../MenteeInfo";
import Payment from "../Payment";

const MainRouter = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="challenge" element={<Challenge />} />
          <Route path="login" element={<Login />} />
          <Route path="mentor-info" element={<MentorInfo />} />
          <Route path="mentee-info" element={<MenteeInfo />} />
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route path="/oauth2/code/kakao" element={<KakaoRedirect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;

import React, { ReactElement, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores/RootReducer";
import { useNavigate } from "react-router-dom";

interface Props {
  route: string;
}

const Header = (): ReactElement => {
  const isLoggedIn: boolean = useSelector((state: RootState) => state.user.isLoggedIn);

  const blackTheme: boolean = window.location.pathname === "/about" || window.location.pathname === "/login" ? true : false;

  const navigate = useNavigate();

  const navigateToLogin = (): void => {
    !isLoggedIn && navigate("/login");
  };

  const navigateToAbout = (): void => {
    navigate("/about");
  };

  const navigateToChallenge = (): void => {
    navigateToLogin();
    // navigate("/challenge");
  };

  const navigateToResume = (): void => {
    // navigateToLogin();
    navigate("/mentee-info");
    // 페이지 구현
  };

  const navigateToMyPage = (): void => {
    // navigateToLogin();
    navigate("/mentor-info");
    // 페이지 구현
  };

  return (
    <div className={`header ${blackTheme ? "header--background-black header--font-white" : "header--background-white header--font-black"}`}>
      <span className="header__title">Starting</span>
      <div className="header__options">
        <span onClick={navigateToAbout}>About</span>
        <span onClick={navigateToChallenge}>Challenge</span>
        <span onClick={navigateToResume}>내 이력서</span>
        <span onClick={navigateToMyPage}>마이 페이지</span>
      </div>
    </div>
  );
};

export default Header;

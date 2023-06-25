import React, { ReactElement, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stores/RootReducer";
import { useNavigate } from "react-router-dom";

const Header = (): ReactElement => {
  const isLoggedIn: boolean = useSelector((state: RootState) => state.user.isLoggedIn);
  const navigate = useNavigate();

  const blackTheme: boolean = window.location.pathname === "/about" || window.location.pathname === "/login" ? true : false;

  const startingLogo = useMemo<string>(() => {
    return blackTheme ? "https://start-ing.kr/_next/image?url=%2Fimg%2Fcommon%2FlogoWhite.png&w=256&q=75" : "https://start-ing.kr/_next/image?url=%2Fimg%2Fcommon%2Flogo.png&w=256&q=75";
  }, [blackTheme]);

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
    // navigate("/mentor-info");
    navigate("/mentor-info");
    // 페이지 구현
  };

  return (
    <div className={`header ${blackTheme ? "header--background-black header--font-white" : "header--background-white header--font-black"}`}>
      <div className="header__content">
        <div className="header__starting">
          <img src={startingLogo} />
        </div>
        <div className="header__options">
          <span onClick={navigateToAbout}>About</span>
          <span onClick={navigateToChallenge}>Challenge</span>
          <span onClick={navigateToResume}>내 이력서</span>
          <span onClick={navigateToMyPage}>마이 페이지</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

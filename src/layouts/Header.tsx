import React, { ReactElement, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../stores/slices/UserSlice";
import { useNavigateByAuth } from "../hooks/useNavigateByAuth";

const Header = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateByAuth = useNavigateByAuth("/mentee-info");

  const blackTheme: boolean = window.location.pathname === "/about" || window.location.pathname === "/login" ? true : false;

  const startingLogo = useMemo<string>(() => {
    return blackTheme ? "https://start-ing.kr/_next/image?url=%2Fimg%2Fcommon%2FlogoWhite.png&w=256&q=75" : "https://start-ing.kr/_next/image?url=%2Fimg%2Fcommon%2Flogo.png&w=256&q=75";
  }, [blackTheme]);

  const navigateToAbout = (): void => {
    navigate("/about");
  };

  const navigateToChallenge = (): void => {
    navigate("/challenge");
  };

  const navigateToResume = (): void => {
    navigateByAuth();
  };

  // const navigateToMyPage = (): void => {
  //   navigate("/mentor-info");
  //   // navigate("/payment");
  //   // 페이지 구현
  // };

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
        </div>
      </div>
    </div>
  );
};

export default Header;

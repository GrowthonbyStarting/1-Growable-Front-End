import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { kakaoOAuth2RequestURL } from "../utils/constants";

const Header = (): ReactElement => {
  return (
    <div className="header">
      <span className="header__title">Starting</span>
      <div className="header__options">
        <span className="header__option-text">About</span>
        <span className="header__option-text">Challenge</span>
        <Link className="header__option-text header__option-text--login" to={kakaoOAuth2RequestURL}>
          login
        </Link>
      </div>
    </div>
  );
};

export default Header;

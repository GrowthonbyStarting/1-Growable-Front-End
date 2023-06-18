import React, { ReactElement } from "react";

const Header = (): ReactElement => {
  return (
    <div className="header">
      <span className="header__title">Starting</span>
      <div className="header__options">
        <span className="header__option-text">About</span>
        <span className="header__option-text">Challenge</span>
      </div>
    </div>
  );
};

export default Header;

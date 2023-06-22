import React, { ReactElement } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";

const BtnKakaoLogin = (): ReactElement => {
  const onClick = (): void => {
    window.location.href = "http://13.209.18.185:8080/api/kakao-login";
  };

  return (
    <button className="btn-kakao-login" onClick={onClick}>
      <RiKakaoTalkFill />
      <span>카카오로 3초만에 계속하기</span>
    </button>
  );
};

export default BtnKakaoLogin;

import React, { ReactElement } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { fetchKakaoAPIKey } from "../../apis/UserApi";

const BtnKakaoLogin = (): ReactElement => {
  const onClick = async (): Promise<void> => {
    // window.location.href = kakaoOAuth2RequestURL;
    await fetchKakaoAPIKey();
  };

  return (
    <button className="btn-kakao-login" onClick={onClick}>
      <RiKakaoTalkFill />
      <span>카카오로 3초만에 계속하기</span>
    </button>
  );
};

export default BtnKakaoLogin;

import React, { ReactElement } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { fetchKakaoAPIKey } from "../../apis/UserApi";
import { getKakaoOAuth2RequestURL } from "../../utils/helper";

const BtnKakaoLogin = (): ReactElement => {
  const onClick = async (): Promise<void> => {
    const apiKey: string = await fetchKakaoAPIKey();
    window.location.href = getKakaoOAuth2RequestURL(apiKey);
  };

  return (
    <button className="btn-kakao-login" onClick={onClick}>
      <RiKakaoTalkFill />
      <span>카카오로 3초만에 계속하기</span>
    </button>
  );
};

export default BtnKakaoLogin;

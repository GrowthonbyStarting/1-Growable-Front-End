import { kakaoRedirectURI } from "./constants";

export const getKakaoOAuth2RequestURL = (key: string): string => {
  return `https://kauth.kakao.com/oauth/authorize?client_id=${key}&redirect_uri=${kakaoRedirectURI}&response_type=code`;
};

export const clientPath = window.location.href.includes("localhost") ? "http://localhost:3000" : process.env.REACT_APP_CLIENT_PATH;
export const kakaoRedirectURI: string = `${clientPath}//oauth2/code/kakao`;
export const kakaoOAuth2RequestURL: string = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API}&redirect_uri=${kakaoRedirectURI}&response_type=code`;

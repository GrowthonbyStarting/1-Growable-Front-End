export const clientPath: string = window.location.href.includes("localhost") ? "http://localhost:3000" : "http://3.38.244.197:3000";
export const serverPath: string = "http://3.38.244.197:8080";
export const kakaoRedirectURI: string = `${clientPath}/oauth2/code/kakao`;
export const majorField: string[] = ["기획 / 전략", "사무", "인사 / HR", "회계 / 세무", "마케팅 / 광고", "MD", "개발", "데이터", "디자인", "물류 / 무역", "영업"];

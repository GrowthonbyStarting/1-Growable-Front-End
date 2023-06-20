import React, { ReactElement, useEffect } from "react";
import { Location, useLocation } from "react-router-dom";
import { testRequest } from "../apis/UserApi";

const KakaoRedirect = (): ReactElement => {
  const location: Location = useLocation();
  const params: URLSearchParams = new URLSearchParams(location.search);

  const code: string | null = params.get("code");

  useEffect(() => {
    testRequest(code!);
  }, []);

  return <div>{code}</div>;
};

export default KakaoRedirect;

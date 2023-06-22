import React, { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Location, useLocation } from "react-router-dom";
import { fetchToken } from "../apis/UserApi";

const KakaoRedirect = (): ReactElement => {
  const dispatch = useDispatch();
  const location: Location = useLocation();
  const params: URLSearchParams = new URLSearchParams(location.search);

  const code: string | null = params.get("code");

  useEffect(() => {
    dispatch(fetchToken(code!) as any);
  }, []);

  return <div>{code}</div>;
};

export default KakaoRedirect;

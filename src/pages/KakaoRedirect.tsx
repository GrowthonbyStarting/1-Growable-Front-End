import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { fetchKakaoUserData } from "../apis/UserApi";
import { RootState } from "../stores/RootReducer";
import { User } from "../types/interfaces/Model";

const KakaoRedirect = (): ReactElement => {
  const user: User = useSelector((state: RootState) => state.user.user);
  const isLoggedIn: boolean = useSelector((state: RootState) => state.user.isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location: Location = useLocation();

  const params: URLSearchParams = new URLSearchParams(location.search);

  const code: string | null = params.get("code");

  useEffect(() => {
    dispatch(fetchKakaoUserData(code!) as any);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      user.mentee || user.mentor ? navigate("/about") : navigate("/identity");
    }
  }, [isLoggedIn]);

  return <div></div>;
};

export default KakaoRedirect;

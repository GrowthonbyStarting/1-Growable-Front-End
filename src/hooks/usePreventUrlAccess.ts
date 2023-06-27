import { useSelector } from "react-redux";
import { RootState } from "../stores/RootReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const usePreventUrlAccess = () => {
  const isLoggedIn: boolean = useSelector((state: RootState) => state.user.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, []);
};

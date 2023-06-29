import { useSelector } from "react-redux";
import { User } from "../types/interfaces/Model";
import { RootState } from "../stores/RootReducer";
import { useNavigate } from "react-router-dom";

export const useNavigateByAuth = (endPoint: string) => {
  const user: User = useSelector((state: RootState) => state.user.user);
  const isLoggedIn: boolean = useSelector((state: RootState) => state.user.isLoggedIn);

  const navigate = useNavigate();

  const navigateTo = (): void => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (!user.mentee && !user.mentor) {
      navigate("/identity");
      return;
    }

    navigate(endPoint);
  };

  return navigateTo;
};

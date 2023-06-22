import { createSlice } from "@reduxjs/toolkit";
import { fetchToken } from "../../apis/UserApi";
import { User } from "../../interfaces/Model";

interface InitialState {
  user: User;
  isLoading: boolean;
  isLoggedIn: boolean;
}

const initialState: InitialState = {
  user: {
    userCode: "",
    kakaoId: "",
    kakaoProfileImg: "",
    kakaoNickname: "",
    kakaoEmail: "",
    userRole: "",
    createTime: new Date(),
  },
  isLoading: false,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.pending, (state, action) => {
      console.log(action.payload);
      state.isLoading = true;
    });
    builder.addCase(fetchToken.rejected, (state) => {
      // error handling
      state.isLoading = false;
    });
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      const user: User = action.payload;

      state.user = user;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

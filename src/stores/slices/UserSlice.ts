import { createSlice } from "@reduxjs/toolkit";
import { fetchBecomeMentee, fetchKakaoUserData } from "../../apis/UserApi";
import { Mentee, User } from "../../types/interfaces/Model";

interface InitialState {
  user: User;
  isLoading: boolean;
  isLoggedIn: boolean;
}

const initialState: InitialState = Object.freeze({
  user: {
    userCode: 0,
    kakaoId: 0,
    kakaoProfileImg: "",
    kakaoNickname: "",
    kakaoEmail: "",
    userRole: "",
    createTime: new Date(),
    mentee: undefined,
    mentor: undefined,
  },
  isLoading: false,
  isLoggedIn: false,
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchKakaoUserData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchKakaoUserData.rejected, (state) => {
      // error handling
      state.isLoading = false;
    });
    builder.addCase(fetchKakaoUserData.fulfilled, (state, action) => {
      const user: User = action.payload;

      state.user = user;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(fetchBecomeMentee.fulfilled, (state, action) => {
      const mentee: Mentee = action.payload;

      state.user.mentee = mentee;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

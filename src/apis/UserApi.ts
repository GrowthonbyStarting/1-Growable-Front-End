import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Mentee, Mentor, User } from "../types/interfaces/Model";
import { kakaoRedirectURI } from "../utils/constants";
import { BecomeMenteeRequest } from "../types/interfaces/Request";

export const fetchKakaoUserData = createAsyncThunk("api/getCode", async (code: string): Promise<User> => {
  const response: AxiosResponse = await axios.post(`${process.env.REACT_APP_SERVER_PATH}/api/getCode`, { authCode: code, redirectURL: kakaoRedirectURI });
  const result: any = response.data.user;

  return result;
});

export const fetchBecomeMentee = createAsyncThunk("user/become-mentee", async ({ userId, becomeMenteeRequest }: { userId: string; becomeMenteeRequest: BecomeMenteeRequest }): Promise<Mentee> => {
  const response: AxiosResponse = await axios.post(`${process.env.REACT_APP_SERVER_PATH}/users/${userId}/become-mentee`, becomeMenteeRequest);
  const result: any = response.data;
  console.log(response);

  return result;
});

// fix parameter
export const fetchBecomeMentor = createAsyncThunk("user/become-mentor", async (userId: string): Promise<Mentor> => {
  const response: AxiosResponse = await axios.post(`${process.env.REACT_APP_SERVER_PATH}/users/${userId}/become-mentor`);
  const result: any = response.data;

  return result;
});

export const fetchKakaoAPIKey = async (): Promise<string> => {
  const response: AxiosResponse = await axios.get(`${process.env.REACT_APP_SERVER_PATH}/api/send-key`);
  const result: string = response.data.apikey;

  return result;
};

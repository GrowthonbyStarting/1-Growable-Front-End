import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Mentee, Mentor, User } from "../types/interfaces/Model";
import { kakaoRedirectURI } from "../utils/constants";

export const fetchKakaoUserData = createAsyncThunk("api/getCode", async (code: string): Promise<User> => {
  const response: AxiosResponse = await axios.post(`${process.env.REACT_APP_SERVER_PATH}/api/getCode`, { client_id: code, redirect_uri: kakaoRedirectURI });
  const result: any = response.data;

  return result;
});

// fix parameter
export const fetchBecomeMentee = createAsyncThunk("user/become-mentee", async (userId: string): Promise<Mentee> => {
  const response: AxiosResponse = await axios.post(`${process.env.REACT_APP_SERVER_PATH}/users/${userId}/become-mentee`);
  const result: any = response.data;

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
  const result: string = response.data.apiKey;

  return result;
};

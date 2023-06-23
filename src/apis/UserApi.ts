import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { User } from "../interfaces/Model";
import { kakaoRedirectURI } from "../utils/constants";

export const fetchToken = createAsyncThunk("/auth", async (code: string): Promise<User> => {
  const response: AxiosResponse = await axios.post(`${process.env.REACT_APP_SERVER_PATH}/api/auth/token`, { client_id: code, redirect_uri: kakaoRedirectURI });
  const result: any = response.data;

  return result;
});

export const fetchKakaoAPIKey = async () => {
  const response: AxiosResponse = await axios.get(`${process.env.REACT_APP_SERVER_PATH}/api/send-key`);
  console.log(response);
};

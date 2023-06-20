import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { User } from "../interfaces/Model";

export const fetchKakaoUserInfo = createAsyncThunk("/auth", async (code: string): Promise<User> => {
  const response: AxiosResponse = await axios.post(`${process.env.REACT_APP_SERVER_PATH}/auth`, { code });
  const result: any = response.data;

  return result;
});

export const testRequest = async (code: string) => {
  const response: AxiosResponse = await axios.post(`${process.env.REACT_APP_SERVER_PATH}/auth`, { code });
  console.log(response);
};

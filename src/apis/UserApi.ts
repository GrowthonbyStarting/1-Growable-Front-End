import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Mentee, Mentor, User } from "../types/interfaces/Model";
import { kakaoRedirectURI, serverPath } from "../utils/constants";
import { BecomeMenteeRequest } from "../types/interfaces/Request";

export const fetchKakaoUserData = createAsyncThunk("api/getCode", async (code: string): Promise<User> => {
  const response: AxiosResponse = await axios.post(`${serverPath}/api/getCode`, { authCode: code, redirectURL: kakaoRedirectURI });
  const result: any = response.data.user;

  return result;
});

export const fetchBecomeMentee = createAsyncThunk("mentee/become-mentee", async ({ userId, becomeMenteeRequest }: { userId: number; becomeMenteeRequest: BecomeMenteeRequest }): Promise<Mentee> => {
  const response: AxiosResponse = await axios.post(`${serverPath}/mentee/${userId}/become-mentee`, becomeMenteeRequest);
  const result: any = response.data;
  console.log(response);

  return result;
});

// fix parameter
export const fetchBecomeMentor = createAsyncThunk("mentor/become-mentor", async (userId: string): Promise<Mentor> => {
  const response: AxiosResponse = await axios.post(`${serverPath}/mentor/${userId}/become-mentor`);
  const result: any = response.data;

  return result;
});

export const fetchKakaoAPIKey = async (): Promise<string> => {
  const response: AxiosResponse = await axios.get(`${serverPath}/api/send-key`);
  const result: string = response.data.apikey;

  return result;
};

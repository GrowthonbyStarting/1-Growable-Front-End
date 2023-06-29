import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Mentee, Mentor, User } from "../types/interfaces/Model";
import { kakaoRedirectURI, serverPath } from "../utils/constants";
import { BecomeMenteeRequest } from "../types/interfaces/Request";
import customAxiosRequest from "../config/AxiosConfig";

export const fetchKakaoUserData = createAsyncThunk("api/getCode", async (code: string): Promise<User> => {
  const response: AxiosResponse = await axios.post(`${serverPath}/api/getCode`, { authCode: code, redirectURL: kakaoRedirectURI });
  console.log(response);
  const result: any = response.data.user;
  result.token = response.data.token;

  return result;
});

export const fetchBecomeMentee = createAsyncThunk("mentee/become-mentee", async ({ userId, becomeMenteeRequest }: { userId: number; becomeMenteeRequest: BecomeMenteeRequest }): Promise<Mentee> => {
  const response: AxiosResponse = await customAxiosRequest.post(`${serverPath}/mentee/${userId}/become-mentee`, becomeMenteeRequest);
  const result: Mentee = JSON.parse(response.config.data);
  console.log(result);

  return result;
});

// fix parameter
export const fetchBecomeMentor = createAsyncThunk("mentor/become-mentor", async (userId: string): Promise<Mentor> => {
  const response: AxiosResponse = await customAxiosRequest.post(`${serverPath}/mentor/${userId}/become-mentor`);
  const result: any = response.data;

  return result;
});

export const fetchKakaoAPIKey = async (): Promise<string> => {
  const response: AxiosResponse = await axios.get(`${serverPath}/api/send-key`);
  const result: string = response.data.apikey;

  return result;
};

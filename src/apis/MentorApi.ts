import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Mentor, Review } from "../types/interfaces/Model";

// requestparam? what is multipartfile
export const fetchMentorProfileImgUpdate = createAsyncThunk("mentor/profile-image", async (mentorId: string): Promise<Mentor> => {
  const response: AxiosResponse = await axios.post(`${process.env.REACT_APP_SERVER_PATH}/mentor/profile-image`);
  const result: any = response.data;

  return result;
});

export const fetchMentorReviews = createAsyncThunk("mentor/reviews", async (mentorId: string): Promise<Review[]> => {
  const response: AxiosResponse = await axios.get(`${process.env.REACT_APP_SERVER_PATH}/mentor/${mentorId}/reviews`);
  const result: any = response.data;

  return result;
});

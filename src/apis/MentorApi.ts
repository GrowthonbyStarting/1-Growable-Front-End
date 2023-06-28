import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Mentor, Review } from "../types/interfaces/Model";
import { serverPath } from "../utils/constants";

// requestparam? what is multipartfile
export const fetchMentorProfileImgUpdate = createAsyncThunk("mentor/profile-image", async (mentorId: string): Promise<Mentor> => {
  const response: AxiosResponse = await axios.post(`${serverPath}/mentor/profile-image`);
  const result: any = response.data;

  return result;
});

export const fetchMentorReviews = createAsyncThunk("mentor/reviews", async (mentorId: string): Promise<Review[]> => {
  const response: AxiosResponse = await axios.get(`${serverPath}/mentor/${mentorId}/reviews`);
  const result: any = response.data;

  return result;
});

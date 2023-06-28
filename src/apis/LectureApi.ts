import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Enrollment, Lecture, Mentee, Review } from "../types/interfaces/Model";
import { serverPath } from "../utils/constants";

// body: lectureDto
export const fetchCreateLecture = createAsyncThunk("lectures/create", async (mentorId: string): Promise<Lecture> => {
  const response: AxiosResponse = await axios.post(`${serverPath}/create/lectures/${mentorId}`);
  const result: any = response.data;

  return result;
});

export const fetchMenteeList = createAsyncThunk("lectures/mentee-list", async ({ lectureId, mentorId }: { lectureId: string; mentorId: string }): Promise<Mentee[]> => {
  const response: AxiosResponse = await axios.get(`${serverPath}/lectures/${lectureId}/mentees/${mentorId}`);
  const result: any = response.data;

  return result;
});

// fetchEnrollLecture

export const fetchCancelLecture = async (lectureId: string, menteeId: string): Promise<Enrollment> => {
  const response: AxiosResponse = await axios.delete(`${serverPath}/${lectureId}/cancel/${menteeId}`);
  const result: any = response.data;

  return result;
};

// principal?
export const fetchReviews = async (review: Review): Promise<Review> => {
  const response: AxiosResponse = await axios.post(`${serverPath}/reviews`, review);
  const result: any = response.data;

  return result;
};

export const fetchLectureReviews = async (lectureId: string): Promise<Review[]> => {
  const response: AxiosResponse = await axios.get(`${serverPath}/lectures/${lectureId}/reviews`);
  const result: any = response.data;

  return result;
};

// setInterval for 30 seconds
// response: LectureWithStatusDto
export const fetchLectureStatus = async (): Promise<any> => {
  const response: AxiosResponse = await axios.get(`${serverPath}/lecturesWithStatus`);
  const result: any = response.data;

  return result;
};

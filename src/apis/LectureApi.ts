import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Enrollment, Lecture, Mentee, Review } from "../types/interfaces/Model";

// body: lectureDto
export const fetchCreateLecture = createAsyncThunk("lectures/create", async (mentorId: string): Promise<Lecture> => {
  const response: AxiosResponse = await axios.post(`${process.env.REACT_APP_SERVER_PATH}/create/lectures/${mentorId}`);
  const result: any = response.data;

  return result;
});

export const fetchMenteeList = createAsyncThunk("lectures/mentee-list", async ({ lectureId, mentorId }: { lectureId: string; mentorId: string }): Promise<Mentee[]> => {
  const response: AxiosResponse = await axios.get(`${process.env.REACT_APP_SERVER_PATH}/lectures/${lectureId}/mentees/${mentorId}`);
  const result: any = response.data;

  return result;
});

// fetchEnrollLecture

export const fetchCancelLecture = async (lectureId: string, menteeId: string): Promise<Enrollment> => {
  const response: AxiosResponse = await axios.delete(`${process.env.REACT_APP_SERVER_PATH}/${lectureId}/cancel/${menteeId}`);
  const result: any = response.data;

  return result;
};

// principal?
export const fetchReviews = async (review: Review): Promise<Review> => {
  const response: AxiosResponse = await axios.post(`${process.env.REACT_APP_SERVER_PATH}/reviews`, review);
  const result: any = response.data;

  return result;
};

export const fetchLectureReviews = async (lectureId: string): Promise<Review[]> => {
  const response: AxiosResponse = await axios.get(`${process.env.REACT_APP_SERVER_PATH}/lectures/${lectureId}/reviews`);
  const result: any = response.data;

  return result;
};

// setInterval for 30 seconds
// response: LectureWithStatusDto
export const fetchLectureStatus = async (): Promise<any> => {
  const response: AxiosResponse = await axios.get(`${process.env.REACT_APP_SERVER_PATH}/lecturesWithStatus`);
  const result: any = response.data;

  return result;
};

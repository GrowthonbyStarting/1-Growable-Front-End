import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Mentee } from "../types/interfaces/Model";
import { serverPath } from "../utils/constants";

// requestparam? what is multipartfile
export const fetchMenteeProfileImgUpdate = createAsyncThunk("mentee/profile-image", async (menteeId: string): Promise<Mentee> => {
  const response: AxiosResponse = await axios.post(`${serverPath}/mentee/profile-image`);
  const result: any = response.data;

  return result;
});

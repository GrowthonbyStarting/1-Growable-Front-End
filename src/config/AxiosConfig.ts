import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { serverPath } from "../utils/constants";

let store: ToolkitStore;

export const injectStore = (_store: ToolkitStore) => {
  store = _store;
};

const customAxiosRequest: AxiosInstance = axios.create({ baseURL: serverPath, timeout: 10000 });

const requestConfig = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token: string = store.getState().user.user.token;

  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

customAxiosRequest.interceptors.request.use(requestConfig);

export default customAxiosRequest;

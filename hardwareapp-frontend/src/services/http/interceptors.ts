import type { AxiosError, AxiosResponse } from "axios";

export const resHandler = <T>(response: AxiosResponse<T>) => response;

export const resErrorHandler = (error: AxiosError) => {
  let errorResponse;
  if (error.response && error.response.data?.message) {
    // I expect the API to handle error responses in valid format
    errorResponse = error.response.data.message;
    // JSON stringify if you need the json and use it later
  } else if (error.request) {
    // TO Handle the default error response for Network failure or 404 etc.,
    errorResponse = error.request.message || error.request.statusText;
  } else {
    errorResponse = error.message;
  }
  console.error(errorResponse);
  throw new Error(errorResponse);
};

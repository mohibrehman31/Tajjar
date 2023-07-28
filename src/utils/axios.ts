import Axios, { AxiosInstance } from "axios";
import { errorHandler } from "./errorHandler";

const axiosApi: AxiosInstance = Axios.create({
  baseURL: `http://localhost:1337/api/home`,
  timeout: 30000,
});
class APIError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    errorHandler(message, "APIError", true);
  }
}

axiosApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!error.response) {
      return Promise.reject(new APIError("Unable to reach server", 0));
    }

    if (error.response.data.message) {
      if (error?.response?.data?.statusCode === 403) {
        errorHandler(error.response.data.message, "Session Ended", true);
        localStorage.clear();

        return Promise.reject(
          new APIError(error.response.data.message, error.response.status)
        );
      }

      return Promise.reject(
        new APIError(error.response.data.message, error.response.status)
      );
    }

    return Promise.reject(
      new APIError(
        `Request failed with ${error.response.status} ${
          error.response?.data?.error?.message
            ? error.response?.data?.error?.message
            : ""
        }`,
        error.response.status
      )
    );
  }
);

export default axiosApi;

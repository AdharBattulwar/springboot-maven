import axios, { Axios } from "axios";

import { env } from "../config/env";
import AttendanceApi from "./attendance";
import { StudentApi } from "./student";
import CourseApi from "./course";

class ApiSdk {
  private readonly _axios: Axios;
  attendance: AttendanceApi;
  student: StudentApi;
  course: CourseApi;

  constructor() {
    this._axios = this.createAxios(env.NEXT_PUBLIC_PLATFORM_API_URL);
    this.attendance = new AttendanceApi(this._axios);
    this.student = new StudentApi(this._axios);
    this.course = new CourseApi(this._axios);
  }

  private createAxios(url: string): Axios {
    const ax = axios.create({
      baseURL: url,
      withCredentials: true,
    });
    // ax.interceptors.request.use(async (config) => {
    //   //Setting up authorization header
    //   let accessToken = Cookies.get("access_token");

    //   // For localhost development, fallback to localStorage if cookies don't work
    //   if (!accessToken && typeof window !== "undefined") {
    //     accessToken = localStorage.getItem("access_token") ?? undefined;
    //   }

    //   // Set Authorization header if we have a token
    //   if (accessToken && accessToken.length > 0) {
    //     config.headers.Authorization = `Bearer ${accessToken}`;
    //   }

    //   return config;
    // });
    return ax;
  }

  getAxios() {
    return this._axios;
  }
}

const api = new ApiSdk();
export default api;

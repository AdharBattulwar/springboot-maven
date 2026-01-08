import { Axios, AxiosResponse } from "axios";
import { CourseRequest, CourseResponse } from "@/types/api";

export class CourseApi {
  private axios: Axios;
  constructor(axiosInstance: Axios) {
    this.axios = axiosInstance;
  }

  /**
   * Get all courses
   */
  public async getAll(): Promise<AxiosResponse<CourseResponse[]>> {
    return this.axios.get("/api/courses");
  }

  /**
   * Get course by ID
   */
  public async getById(id: string): Promise<AxiosResponse<CourseResponse>> {
    return this.axios.get(`/api/courses/${id}`);
  }

  /**
   * Create a new course
   */
  public async create(
    data: CourseRequest
  ): Promise<AxiosResponse<CourseResponse>> {
    return this.axios.post("/api/courses", data);
  }

  /**
   * Update course by ID
   */
  public async update(
    id: string,
    data: CourseRequest
  ): Promise<AxiosResponse<CourseResponse>> {
    return this.axios.put(`/api/courses/${id}`, data);
  }

  /**
   * Delete course by ID
   */
  public async delete(id: string): Promise<AxiosResponse<void>> {
    return this.axios.delete(`/api/courses/${id}`);
  }
}

export default CourseApi;

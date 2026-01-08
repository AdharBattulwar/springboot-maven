import { Axios, AxiosResponse } from "axios";
import { StudentRequest, StudentResponse } from "@/types/api";

export class StudentApi {
  private axios: Axios;
  constructor(axiosInstance: Axios) {
    this.axios = axiosInstance;
  }

  /**
   * Get all students
   */
  public async getAll(): Promise<AxiosResponse<StudentResponse[]>> {
    return this.axios.get("/api/students");
  }

  /**
   * Get student by ID
   */
  public async getById(id: string): Promise<AxiosResponse<StudentResponse>> {
    return this.axios.get(`/api/students/${id}`);
  }

  /**
   * Create a new student
   */
  public async create(
    data: StudentRequest
  ): Promise<AxiosResponse<StudentResponse>> {
    return this.axios.post("/api/students", data);
  }

  /**
   * Update student by ID
   */
  public async update(
    id: string,
    data: StudentRequest
  ): Promise<AxiosResponse<StudentResponse>> {
    return this.axios.put(`/api/students/${id}`, data);
  }

  /**
   * Delete student by ID
   */
  public async delete(id: string): Promise<AxiosResponse<void>> {
    return this.axios.delete(`/api/students/${id}`);
  }
}

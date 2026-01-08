import { Axios, AxiosResponse } from "axios";
import { AttendanceRequest, AttendanceResponse } from "@/types/api";

class AttendanceApi {
  private axios: Axios;
  constructor(axiosInstance: Axios) {
    this.axios = axiosInstance;
  }

  /**
   * Get all attendance records
   */
  public async getAll(): Promise<AxiosResponse<AttendanceResponse[]>> {
    return this.axios.get("/api/attendance");
  }

  /**
   * Get attendance record by ID
   */
  public async getById(id: string): Promise<AxiosResponse<AttendanceResponse>> {
    return this.axios.get(`/api/attendance/${id}`);
  }

  /**
   * Create a new attendance record
   */
  public async create(
    data: AttendanceRequest
  ): Promise<AxiosResponse<AttendanceResponse>> {
    return this.axios.post("/api/attendance", data);
  }

  /**
   * Update attendance record by ID
   */
  public async update(
    id: string,
    data: AttendanceRequest
  ): Promise<AxiosResponse<AttendanceResponse>> {
    return this.axios.put(`/api/attendance/${id}`, data);
  }

  /**
   * Delete attendance record by ID
   */
  public async delete(id: string): Promise<AxiosResponse<void>> {
    return this.axios.delete(`/api/attendance/${id}`);
  }

  /**
   * Get all attendance records for a specific student
   */
  public async getByStudent(
    studentId: string
  ): Promise<AxiosResponse<AttendanceResponse[]>> {
    return this.axios.get(`/api/attendance/student/${studentId}`);
  }

  /**
   * Get attendance records for a student within a date range
   * @param studentId - Student ID
   * @param start - Start date (YYYY-MM-DD format)
   * @param end - End date (YYYY-MM-DD format)
   */
  public async getByStudentAndRange(
    studentId: string,
    start?: string,
    end?: string
  ): Promise<AxiosResponse<AttendanceResponse[]>> {
    const params = new URLSearchParams();
    if (start) params.append("start", start);
    if (end) params.append("end", end);

    const queryString = params.toString();
    const url = `/api/attendance/student/${studentId}/range${
      queryString ? `?${queryString}` : ""
    }`;

    return this.axios.get(url);
  }

  /**
   * Get all attendance records for a specific course
   */
  public async getByCourse(
    courseId: string
  ): Promise<AxiosResponse<AttendanceResponse[]>> {
    return this.axios.get(`/api/attendance/course/${courseId}`);
  }
}

export default AttendanceApi;

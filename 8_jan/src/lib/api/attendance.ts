import { Axios, AxiosResponse } from "axios";

class AttendanceApi {
    private axios: Axios;
    constructor(axiosInstance: Axios) {
        this.axios = axiosInstance;
    }

    public async getAttendanceRecords(userId: string): Promise<AxiosResponse> {
        return this.axios.get(`/attendance/records/${userId}`);
    }

    public async markAttendance(userId: string, status: string): Promise<AxiosResponse> {
        return this.axios.post(`/attendance/mark`, { userId, status });
    }
}

export default AttendanceApi;
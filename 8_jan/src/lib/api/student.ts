import { Axios, AxiosResponse } from "axios";

export class StudentApi {
    private axios: Axios;
    constructor(axiosInstance: Axios) {
        this.axios = axiosInstance;
    }

    public async getStudentDetails(studentId: string): Promise<AxiosResponse> {
        return this.axios.get(`/students/${studentId}`);
    }

    public async updateStudentInfo(studentId: string, data: any): Promise<AxiosResponse> {
        return this.axios.put(`/students/${studentId}`, data);
    }
}
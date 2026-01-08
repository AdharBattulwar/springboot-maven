// Student Types
export interface StudentRequest {
  name: string;
  email: string;
  grade: string;
}

export interface StudentResponse {
  id: string;
  name: string;
  email: string;
  grade: string;
}

// Course Types
export interface CourseRequest {
  code: string;
  title: string;
}

export interface CourseResponse {
  id: string;
  code: string;
  title: string;
}

// Attendance Types
export enum AttendanceStatus {
  PRESENT = "PRESENT",
  ABSENT = "ABSENT",
  LATE = "LATE",
  EXCUSED = "EXCUSED",
}

export interface AttendanceRequest {
  studentId: string;
  courseId: string;
  date: string; // ISO date string (YYYY-MM-DD)
  status: AttendanceStatus;
  note?: string;
}

export interface AttendanceResponse {
  id: string;
  studentId: string;
  courseId: string;
  date: string; // ISO date string (YYYY-MM-DD)
  status: AttendanceStatus;
  note?: string;
}

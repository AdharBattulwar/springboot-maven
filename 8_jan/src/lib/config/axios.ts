import { env } from "@/lib/config/env";

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_PLATFORM_API_URL,
});

export default axiosInstance;
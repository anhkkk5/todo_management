import axios from "axios";

// Export API_DOMAIN để có thể import từ file khác
export const API_DOMAIN = "http://localhost:3000/";

const axiosInstance = axios.create({
  baseURL: API_DOMAIN,
  timeout: 10000,
});

// Export default axiosInstance
export default axiosInstance;

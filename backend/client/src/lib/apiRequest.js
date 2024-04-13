import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://test-deployment-osb4iogjp-andarsonbrels-projects.vercel.app//api",
  withCredentials: true,
});

export default apiRequest;

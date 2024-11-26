// services/Services.js
import { axiosInstance } from "../api/axios";

export const serviceRegister = async (values) => {
  try {
    const response = await axiosInstance.post('/service-registers/', values);
    return response.data;
  } catch (error) {
    console.error("Error registering service:", error.response ? error.response.data : error.message);
    throw error; // Re-throw the error for further handling
  }
};

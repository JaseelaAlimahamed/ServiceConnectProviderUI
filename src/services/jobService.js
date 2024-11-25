import {axiosInstance} from "../api/axios";

export const fetchCompletedService = async () => {
  try {
    const response = await axiosInstance.get("/completed/", {
      
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching completed services:", error);
    throw error;
  }
};

export const fetchOnGoingService = async () => {
  try {
    const response = await axiosInstance.get("/ongoing/", {
     
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching completed services:", error);
    throw error;
  }
};

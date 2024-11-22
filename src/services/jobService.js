import {axiosInstance} from "../api/axios";

export const fetchCompletedService = async (token) => {
  try {
    const response = await axiosInstance.get("/completed/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching completed services:", error);
    throw error;
  }
};

export const fetchOnGoingService = async (token) => {
  try {
    const response = await axiosInstance.get("/ongoing/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching completed services:", error);
    throw error;
  }
};

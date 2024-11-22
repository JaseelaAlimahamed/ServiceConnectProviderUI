import { baseApi } from "../api/axios";

export const fetchCompletedService = async (token) => {
  try {
    const response = await baseApi.get("/completed/", {
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
    const response = await baseApi.get("/ongoing/", {
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

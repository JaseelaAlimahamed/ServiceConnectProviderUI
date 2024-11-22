import { axiosInstance } from "../api/axios";

const accessToken = "your_access_token_here";

// Function to fetch user ID
export const fetchUserId = async () => {
  try {
    const response = await axiosInstance.get("/profile/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userId = response.id_number;
    console.log("Fetched User ID:", userId);
    return userId;
  } catch (error) {
    console.error("Error fetching User ID:", error.message);
    throw error;
  }
};

// Update profile data for a specific customer based on their ID
export const postProfileData = async (id, profileData) => {
  try {
    const response = await axiosInstance.put(`/profile/${id}/`, profileData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error message:", error.message);
    console.error("Data:", error.response?.data);
    throw error;
  }
};

// Get location data for a specific customer based on their ID
export const getLocationData = async (id) => {
  try {
    const response = await axiosInstance.get(`/profile/${id}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log("Location data:", response.data);
    return {
      district: response.data.district,
      state: response.data.state,
    };
  } catch (error) {
    console.error("Error fetching location data:", error.message);
    throw error;
  }
};

// Get additional data for a specific customer based on their ID
export const getAdditionalData = async (id) => {
  try {
    const response = await axiosInstance.get(`/profile/${id}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log("Additional Data:", response.data);
    return {
      dealer: response.data.dealer,
      franchisee: response.data.franchisee,
      payout_required: response.data.payout_required,
    };
  } catch (error) {
    console.error("Error Fetching Additional Data", error.message);
    throw error;
  }
};

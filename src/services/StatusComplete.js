import {axiosInstance} from "../api/axios";

export async function completeBooking(id) {
  try {
    const accessToken = localStorage.getItem("accessToken"); // Retrieve the access token

    if (!accessToken) {
      throw new Error("Access token not found. Please log in again.");
    }

    const response = await axiosInstance.post(
      "/change-work-status/",
      { id }, // Body with booking ID
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Pass token in Authorization header
        },
      }
    );

    console.log("Work status updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating work status:", error);
    throw error;
  }
}

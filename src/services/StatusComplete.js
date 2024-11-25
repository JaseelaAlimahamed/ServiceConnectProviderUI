import {axiosInstance} from "../api/axios";

export async function completeBooking(id) {
  try {
    

    const response = await axiosInstance.post(
      "/change-work-status/",
      { id }, // Body with booking ID
      
    );

    console.log("Work status updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating work status:", error);
    throw error;
  }
}

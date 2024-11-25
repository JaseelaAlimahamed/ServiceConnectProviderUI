
//  Fetch Booking details

import {axiosInstance} from "../api/axios";

export const fetchBookings = async () => {
    try {
      const response = await axiosInstance.get("bookings/");  
      console.log(response);
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error("Error fetching data:", error.response ? error.response.data : error.message);
      return [];
    }
 };


 export const serviceDetails = async (id) => {
  try {
    const response = await axiosInstance.post(`service_details/`, {
      booking_id: id
    });  
    console.log(response);
    return response.data
  } catch (error) {
    console.error("Error fetching data:", error.response ? error.response.data : error.message);
    return [];
  }
};


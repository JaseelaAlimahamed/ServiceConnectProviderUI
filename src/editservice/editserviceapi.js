import axiosInstance from "../baseUrl/axiosInstance";

//  Fetch Booking details

export const fetchservicedetails = async (id) => {
    try {
      const response = await axiosInstance.get(`service-provider/service-registers/${id}/`);  
      console.log(response);
      return response.data ? response.data : [];
    } catch (error) {
      console.error("Error fetching data:", error.response ? error.response.data : error.message);
      return [];
    }
  };
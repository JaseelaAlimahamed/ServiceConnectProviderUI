
//  Fetch Booking details

import {axiosInstance} from "../api/axios";

export const fetchservicedetails = async (id = null) => {
  try {
    const endpoint = id ? `service-registers/${id}/` : `service-registers/`;
    const response = await axiosInstance.get(endpoint);
    console.log(response);
    return response.data ? response.data : [];
  } catch (error) {
    console.error("Error fetching data:", error.response ? error.response.data : error.message);
    return [];
  }
};


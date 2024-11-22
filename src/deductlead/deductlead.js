// api.js

import { axiosInstance } from "../api/axios";

export const deductLead = async (bookingId) => {
    const DEDUCTLEAD_URL = "/service-provider/deductlead/";
    console.log(bookingId);
    try {
        const payload = { booking_id: "BI-8826D6CF" };
        //const payload = { booking_id: bookingId };
        
        // Send PATCH request with the payload in the body
        const response = await axiosInstance.patch(DEDUCTLEAD_URL, payload);
        
        console.log("Response:", response);
        return response.data;
    } catch (error) {
        console.error("Error fetching data::", error.response ? error.response.data : error.message);
        throw error;
    }
};

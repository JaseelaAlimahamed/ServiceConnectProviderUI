import { axiosInstance } from "../../src/api/axios";

export const getServiceRequests = async () => {
  try {
    const response = await axiosInstance.get(
      "service-requests/",
      {}
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching service requests:", error);
    throw error;
  }
};

export const getServiceRequestsDetails = async (id, status) => {
  try {
    console.log("Fetching invoice details for ID:", id);
    const response = await axiosInstance.patch(
      `service-requests/details/`,
      {
        booking_id: id,
        // acceptance_status: "accept"
      }
    );

    console.log("Service request details fetched:", response.data); // Log the response
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching service request details for ID ${id}:`,
      error
    );
    throw error;
  }
};

export const getInvoiceDetails = async (id) => {
  try {
    const response = await axiosInstance.patch(`invoice/`, {
      booking_id: id,
    });

    console.log("Invoice details fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching invoice details for ID ${id}:`, error);
    throw error;
  }
};

export const paymentTransactions = async () => {
  try {
    const response = await axiosInstance.get(
      "transactions/",
      {}
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching transaction details:", error);
    throw error;
  }
};

export const financialDetails = async () => {
  try {
    const response = await axiosInstance.get(
      "financial/",
      {}
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching financial details:", error);
    throw error;
  }
};

export const profileDetails = async () => {
  try {
    const response = await axiosInstance.get("profile/", {});

    return response.data;
  } catch (error) {
    console.error("Error fetching profile details:", error);
    throw error;
  }
};

export const reviews = async () => {
  try {
    const response = await axiosInstance.get("reviews/", {});
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};


  export const fetchComplaints = async (tab) => {
    const url =
      tab === 'active'
        ? 'complaints/active/'
        : 'complaints/completed/';
   
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching complaints:', error);
      throw error;
    }
};

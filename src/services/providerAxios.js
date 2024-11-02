import axiosInstance from '../../src/api/axios';

export const getServiceRequests = async (accessToken) => {
  try {
    const response = await axiosInstance.get('/service-provider/service-requests/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching service requests:', error);
    throw error;
  }
};


export const getServiceRequestsDetails = async (accessToken,id) => {
  try {
    const response = await axiosInstance.get(`/service-provider/service-requests/details/${id}`,
        {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching service requests:', error);
    throw error;
  }
};


export const paymentTransactions = async (accessToken) => {
  
  try {
    console.log(accessToken)
    const response = await axiosInstance.get('/service-provider/transactions/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response)
    return response.data;

  } catch (error) {
    console.error('Error fetching transaction details:', error);
    throw error;
  }
};
import axiosInstance from '../../src/api/axios'; 

localStorage.setItem('accessToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwOTU1NTIyLCJpYXQiOjE3MzA5NTM3MjIsImp0aSI6IjMyZWNkNzQwNTMyYTQxMWZiZTBmOTRjMzBkYzc0MTQ0IiwidXNlcl9pZCI6NH0.EnnWmB-zDsw87S69TIePRyO-jCg-_dhNFj-ts1Tzhtc');

export const getServiceRequests = async () => {
  try {
    
    const accessToken = localStorage.getItem('accessToken'); 
    if (!accessToken) {
      throw new Error('No access token found');
    }

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

export const getServiceRequestsDetails = async (accessToken, id) => {
  try {
    if (!accessToken) {
      throw new Error('No access token found');
    }
    console.log('Access token found:', accessToken);
    console.log('Fetching invoice details for ID:', id);
    const response = await axiosInstance.get(`/service-provider/service-requests/details/${id}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log('Service request details fetched:', response.data);  // Log the response
    return response.data;

  } catch (error) {
    console.error(`Error fetching service request details for ID ${id}:`, error);
    throw error;
  }
};



export const getInvoiceDetails = async (id) => {  
  try {
    const accessToken = localStorage.getItem('accessToken');  

    if (!accessToken) {
      throw new Error('No access token found');
    }

    const response = await axiosInstance.get(`/service-provider/invoice/${id}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log('Invoice details fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching invoice details for ID ${id}:`, error);
    throw error;
  }
};




export const paymentTransactions = async () => {
  try {

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('No access token found');
    }

    const response = await axiosInstance.get('/service-provider/transactions/', {
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching transaction details:', error);
    throw error;
  }
};


export const financialDetails = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('No access token found');
    }

    const response = await axiosInstance.get('/service-provider/financial/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching financial details:', error);
    throw error;
  }
};


export const profileDetails = async () => {
  try {

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('No access token found');
    }

    const response = await axiosInstance.get('/service-provider/profile/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching profile details:', error);
    throw error;
  }
};


export const reviews = async () => {
  try {

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    const response = await axiosInstance.get('/service-provider/reviews/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};


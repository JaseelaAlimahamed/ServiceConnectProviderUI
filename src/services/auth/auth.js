import { axiosInstance } from '../../api/axios';
import { store } from '../../redux/store';
export const refreshAccessToken = async () => {
   try {
     const state = store.getState();
     const { refreshToken } = state.auth;
     
     const response = await axiosInstance.post("/api/token/refresh/", {
         refresh: refreshToken
       });
       return response.data;
   }  catch (error) {
    console.error("Error refreshing access token:", error);
    throw error.response ? error.response.data : new Error(error.message);
  }
}
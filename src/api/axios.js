
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'https://learnbudsgvr.pythonanywhere.com/',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default axiosInstance;


import axios from "axios";
import { store } from '../redux/store';
import { clearAccessToken } from "../redux/features/authSlice";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://learnbudsgvr.pythonanywhere.com/',
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

/*
 * 1. REQUEST INTERCEPTOR
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const { accessToken } = state.auth;



    // Set Authorization header if accessToken is available
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // logError(error, store);
    // return Promise.reject(error);
    console.log(error)
  }
);

/*
 * 2. RESPONSE INTERCEPTOR
 */
function attachResponseInterceptor() {
  
  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response) => {
      return response; 
    },
    async (error) => {
      const config = error?.config;
      const responseError = error?.response;
      console.log(responseError?.status, responseError?.headers);
      
      if (
        responseError?.status === 401 &&
      responseError?.data?.code === "token_not_valid" &&
      responseError?.data?.messages?.some(
        (msg) => msg.token_class === "AccessToken"
      )
    ) {
        axiosInstance.interceptors.response.eject(responseInterceptor);
        console.log('hai');
        store?.dispatch(clearAccessToken());

        
        try {
          const MAX_RETRIES = 2;
          console.log(MAX_RETRIES);
          
          config._retries = Math.abs(config._retries) || 0;
          if (config._retries >= MAX_RETRIES) {
            throw new Error(`Max retries (${config._retries}) reached!`);
          }

          // const data = await refreshAccessToken();
          // console.log(data);
          
          // const accessToken = data.accessToken
          // config.headers.Authorization = `Bearer ${data.accessToken}`;
          // store.dispatch(  (accessToken));

          config._retries++;
          attachResponseInterceptor();
          return axiosInstance(config);
        } catch (reauthError) {
          console.log("Re-authentication error: ", reauthError);
        } finally {
          attachResponseInterceptor(); 
        }
      }
      // store?.dispatch(clearAccessToken());
      console.log(error);
      
      //  logError(error, store); 
      // return Promise.reject(error);
    }
  );
}

attachResponseInterceptor();

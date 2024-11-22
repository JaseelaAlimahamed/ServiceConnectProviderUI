
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://learnbudsgvr.pythonanywhere.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

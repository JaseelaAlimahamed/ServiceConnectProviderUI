import axios from "axios";

// Assuming the token is stored in local storage after user login
const token = localStorage.getItem("authToken");

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwMjcyMTExLCJpYXQiOjE3MzAyNzAzMTEsImp0aSI6IjU2NmY2MGZlODExZDRkY2ZiZWZjNWY1MjMyNGI2NDZlIiwidXNlcl9pZCI6NH0.ePBMEV5HAPhGE30vqt40URLJ0Nm0C2uIXoExGb9ebd4`,
  },
});

// Add the token dynamically for each request if it exists
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken"); // Fetch the token from local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
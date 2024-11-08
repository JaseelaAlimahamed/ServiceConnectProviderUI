import axios from "axios";

// Assuming the token is stored in local storage after user login
const token = localStorage.getItem("authToken");

const axiosInstance = axios.create({
  baseURL: "https://learnbudsgvr.pythonanywhere.com/",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxMDUxMzU0LCJpYXQiOjE3MzEwNDk1NTQsImp0aSI6IjMyMTA4NmU0YTk4NDQ1MTU4OWJlMWU0MjRkZjI3NDU0IiwidXNlcl9pZCI6NH0.An_hWEwWQMnIk52SSD4QjsA6j28Gc5TD93gMgbEd0Qg`,
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
import { axiosInstance } from "../api/axios";

export const signInProvider = async (email, password) => {
  try {
    const response = await axiosInstance.post("/login/", {
      email_or_phone: email,
      password: password,
    });
    if (response.status === 200) {
      const { access, refresh } = response.data;
      return { access, refresh };
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    // Handling error cases
    throw new Error(error.response?.data?.message || "Login request failed");
  }
};
``
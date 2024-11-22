import { redirect } from "react-router-dom";

// Helper function to get a session storage item with expiration check
const getSessionStorageWithExpiry = (key) => {
  const itemStr = sessionStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    sessionStorage.removeItem(key);
    return null;
  }
  return item.value;
};

// Check if user is authenticated by validating the session token with expiry
export const isAuthenticated = () => {
  const token = getSessionStorageWithExpiry("accessToken");
  return !!token; // Returns true if token is valid, false otherwise
};

// Protect the route by redirecting to the sign-in page if not authenticated
export const protectRoute = () => {
  if (!isAuthenticated()) {
    return redirect("/sign-in");
  }

  return null;
};

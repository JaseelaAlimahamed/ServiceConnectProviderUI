// import axiosInstance from "../../baseUrl/axiosInstance";

//  Fetch Subcategories details

// export const fetchSuggestions = async (category_id) => {
//   try {
//     const response = await axiosInstance.get(
//       `categories/${category_id}/subcategories/`,
//       {
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     console.log(response);
//     return Array.isArray(response.data) ? response.data : [];
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// };
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchBlogURL = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/blog/getblog/${id}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

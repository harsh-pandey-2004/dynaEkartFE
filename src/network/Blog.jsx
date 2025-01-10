import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/blog/getblog`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

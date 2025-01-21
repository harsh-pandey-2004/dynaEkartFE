import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchProduct = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/product/product/${id}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

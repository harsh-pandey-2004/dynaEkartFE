import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchFooterItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/footer/getitems`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

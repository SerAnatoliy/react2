import axios from "axios";

export const PER_PAGE = 12;

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "41007167-88dba9d0c39a2133a3a0b3dca";

const api = axios.create({
  baseURL: BASE_URL,

  params: {
    key: API_KEY,
    image_type: "photo",
    orientation: "horizontal",
    per_page: PER_PAGE,
  },
});

export const getImages = async (query, page = 1) => {
  const { data } = await api.get("/", {
    params: {
      q: query,
      page,
    },
  });
  return data;
};

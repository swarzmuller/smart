import axios from "axios";
import qs from "qs";
import { BASE_URL } from "./constans";

const api = axios.create({
  baseURL: BASE_URL,
  paramsSerializer: (params) => {
    return qs.stringify(params, {
      skipNulls: true,
      arrayFormat: "repeat",
    });
  },
});

export default api;

import api from "./interseptors";

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

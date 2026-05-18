import API from "../../../shared/api/api";

export const login = async (data: { email: string; password: string }) => {
   const res = await API.post("/login", data);
  return res.data;
};
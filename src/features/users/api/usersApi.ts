import axios from "axios";
import type { User } from "../types/user";

const API_URL = "http://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(API_URL);
  return response.data;
};
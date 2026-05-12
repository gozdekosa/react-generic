import axios from "axios";
import type { User } from "../types/profile";

const API_URL = "http://jsonplaceholder.typicode.com/users/1";

export const fetchMe = async (): Promise<User> => {
  const response = await axios.get<User>(API_URL);
  return response.data;
};

export const updateMe = async (
  data: Partial<User>
): Promise<User> => {
  const response = await axios.put<User>(
    API_URL,
    data
  );

  return response.data;
};
import axios from "axios";
import type { Post } from "../types/post";

const API_URL = "http://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async (
  page: number,
  limit: number
): Promise<Post[]> => {
  const response = await axios.get<Post[]>(API_URL, {
    params: {
      _page: page,
      _limit: limit,
    },
  });
  return response.data;
};
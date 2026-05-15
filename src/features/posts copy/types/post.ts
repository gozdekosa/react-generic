export type Post = {
  id: number;
  title: string;
};

export type ApiResponse = {
  data: Post[];
  items: number;
  pages: number;
};
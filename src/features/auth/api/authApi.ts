type LoginPayload = {
  email: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
};

export const login = async (data: LoginPayload): Promise<LoginResponse> => {
  // fake delay
  await new Promise((r) => setTimeout(r, 500));

  if (data.email !== "test@test.com" || data.password !== "123456") {
    throw new Error("Invalid credentials");
  }

  return {
    accessToken: "fake-jwt-token-123",
    user: {
      id: 1,
      email: data.email,
    },
  };
};
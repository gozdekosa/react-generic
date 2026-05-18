import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import API from "../../../shared/api/api";

type AuthContextType = {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ✅ token sadece memory'de
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  const login = (newToken: string) => {
    setToken(newToken);
  };

  const refreshAuth = async () => {
    try {
      const res = await API.post("/refresh");

      setToken(res.data.accessToken);
    } catch (err) {
      setToken(null);
    } finally {
      setLoading(false);
      setInitialized(true);
    }
  };

  const logout = async () => {
    await API.post("/logout");
    setToken(null);
    setInitialized(true);
    setLoading(false);
  };

  useEffect(() => {
    if (!initialized) {
      refreshAuth();
    }
  }, []);

  if (loading) return null;

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {initialized ? children : null}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
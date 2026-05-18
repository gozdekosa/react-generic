import { createContext, useEffect, useState } from "react";
import { authApi } from "../api/authApi";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (t) => setToken(t);

  const logout = async () => {
    await authApi.logout();
    setToken(null);
  };

  const refreshAuth = async () => {
    try {
      const res = await authApi.refresh();
      setToken(res.data.accessToken);
    } catch {
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshAuth();
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
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
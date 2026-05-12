import { useEffect, useState } from "react";
import { fetchMe } from "../api/profileApi";
import type { User } from "../types/profile";

const useMe = () => {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(false);

  const loadUser = async () => {
    setLoading(true);

    const data = await fetchMe();

    setUser(data);

    setLoading(false);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return {
    user,
    loading,
  };
};

export default useMe;
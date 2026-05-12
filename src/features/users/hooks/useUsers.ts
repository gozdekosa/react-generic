// hooks/useUsers.ts
import { useEffect, useRef, useState } from "react";
import { fetchUsers } from "../api/usersApi";
import type { User } from "../types/user";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    setLoading(true);

    const data = await fetchUsers();

    setUsers(data);

    setLoading(false);
  };

  // page değişince veri çek
  useEffect(() => {
    loadUsers();
  }, []);

  return { users, loading };
};

export default useUsers;

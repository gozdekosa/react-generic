import { useState } from "react";
import { updateMe } from "../api/profileApi";
import type { User } from "../types/profile";

const useUpdateMe = () => {
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (
    data: Partial<User>
  ) => {
    try {
      setLoading(true);

      const updatedUser = await updateMe(data);

      return updatedUser;
    } finally {
      setLoading(false);
    }
  };

  return {
    handleUpdate,
    loading,
  };
};

export default useUpdateMe;
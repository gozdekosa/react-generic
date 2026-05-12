import { useMemo, useState } from "react";
import useDebounce from "../../../shared/hooks/useDebounce";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

type SortKey = "id" | "name" | "username" | "email";

type SortConfig = {
  key: SortKey;
  direction: "asc" | "desc";
} | null;

const useUserTable = (users: User[]) => {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 400);
    const [sortConfig, setSortConfig] = useState<SortConfig>(null);

    const handleSort = (key: "id" | "name" | "username" | "email") => {
        setSortConfig((prev) => {
            if (prev?.key === key) {
            return {
                key,
                direction: prev.direction === "asc" ? "desc" : "asc",
            };
            }

            return {
            key,
            direction: "asc",
            };
        });
    };

    const processedUsers = useMemo(() => {
        let result = [...users];

        // 1. filter
        if (debouncedSearch.trim()) {
            const s = debouncedSearch.toLowerCase();

            result = result.filter(
            (u) =>
                u.name.toLowerCase().includes(s) ||
                u.username.toLowerCase().includes(s) ||
                u.email.toLowerCase().includes(s)
            );
        }

        // 2. sort (optional)
        if (sortConfig) {
            result.sort((a, b) => {
            const aVal = a[sortConfig.key];
            const bVal = b[sortConfig.key];

            // ID numeric sort
            if (sortConfig.key === "id") {
                return sortConfig.direction === "asc"
                ? Number(aVal) - Number(bVal)
                : Number(bVal) - Number(aVal);
            }

            // string sort
            return sortConfig.direction === "asc"
                ? String(aVal).localeCompare(String(bVal))
                : String(bVal).localeCompare(String(aVal));
            });
        }

    return result;
    }, [users, debouncedSearch, sortConfig]);

    const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "AD SOYAD" },
    { key: "username", label: "KULLANICI ADI" },
    { key: "email", label: "EMAIL" },
    ] as const;

    return { search, setSearch, processedUsers, handleSort, sortConfig, columns };

}

export default useUserTable;
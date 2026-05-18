import { useMemo, useState } from "react";
import useDebounce from "../../../shared/hooks/useDebounce";

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

type User = {
    id: number;
    name: string;
};

type SortKey = "id" | "title" | "body";

type SortConfig = {
  key: SortKey;
  direction: "asc" | "desc";
} | null;

const usePostTable = (posts: Post[], users: User[]) => {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 400);
    const [sortConfig, setSortConfig] = useState<SortConfig>(null);

    const handleSort = (key: "id" | "title" | "body") => {
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

    const userMap = useMemo(() => {
        const map = new Map<number, string>();

        users.forEach((user) => {
            map.set(user.id, user.name);
        });

        return map;
    }, [users]);

    const processedPosts = useMemo(() => {
        let result = [...posts];

        // 1. filter
        if (debouncedSearch.trim()) {
            const s = debouncedSearch.toLowerCase();

            result = result.filter(
            (p) =>
                p.title.toLowerCase().includes(s) ||
                p.body.toLowerCase().includes(s)
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

    return result.map((post) => ({
        ...post,
        userName: userMap.get(post.userId) || "Unknown",
    }));
    }, [posts, debouncedSearch, sortConfig, userMap]);

    const columns = [
    { key: "id", label: "ID" },
    { key: "title", label: "BAŞLIK" },
    { key: "body", label: "İÇERİK" },
    { key: "userName", label: "KULLANICI" },
    ] as const;

    return { search, setSearch, processedPosts, handleSort, sortConfig, columns };

}

export default usePostTable;
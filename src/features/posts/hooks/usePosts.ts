import { useEffect, useRef, useState, useCallback } from "react";
import { fetchPosts } from "../api/postsApi";
import type { Post } from "../types/post";

const LIMIT = 5;

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);

  // state sync -> ref sync (closure problemini çözer)
  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);

  const loadPosts = async (pageNum: number) => {
    if (loadingRef.current || !hasMoreRef.current) return;

    loadingRef.current = true;
    setLoading(true);

    try {
      const data = await fetchPosts(pageNum, LIMIT);

      setPosts((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const filtered = data.filter((p) => !existingIds.has(p.id));
        return [...prev, ...filtered];
      });

      // son sayfa kontrolü
      if (data.length < LIMIT || data.length === 0) {
        setHasMore(false);
      }

    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  // page değişince veri çek
  useEffect(() => {
    loadPosts(page);
  }, [page]);

  // intersection observer (stable callback)
  const lastPostRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loadingRef.current) return;
      if (!hasMoreRef.current) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreRef.current) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    []
  );

  return { posts, loading, lastPostRef };
};

export default usePosts;


/* REF NE?
const loadingRef = useRef(false);
const hasMoreRef = useRef(true);

👉 bunlar “gizli kontrol kutuları”

useState’den farkı:
useState	useRef
render eder	render etmez
yavaş güncellenir	anında güncellenir
🧠 Neden ref kullandık?

Çünkü observer çok hızlı çalışır.

React state yetişemez. 


✔ closure problemi
✔ async race condition
✔ observer spam
✔ state vs ref farkı
✔ request locking sistemi



*/
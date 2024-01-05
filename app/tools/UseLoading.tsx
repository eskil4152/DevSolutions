"use client";

import { useEffect, useState } from "react";

interface UseLoadingResult<T> {
  loading: boolean;
  error?: any;
  data?: T;
  reload: () => Promise<void>;
}

export default function useLoading<T>(
  loadingFunction: () => Promise<T>,
  deps: any[] = []
): UseLoadingResult<T> {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [data, setData] = useState<T>();

  async function load() {
    try {
      setLoading(true);
      setData(await loadingFunction());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, deps);

  return { loading, error, data, reload: load };
}

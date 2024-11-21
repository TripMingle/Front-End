'use client';

import { useState, useEffect } from 'react';

export function useApiHandler<T, P extends any[] = void[]>(
  asyncFn: (...params: P) => Promise<T>,
  errorMessage: string,
  ...params: P
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await asyncFn(...params);
        setData(result);
      } catch (err) {
        throw new Error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [asyncFn, errorMessage]);

  return { data, error, loading };
}

import { useState } from 'react';

type UseFetchingType = (
  callback: () => Promise<any>,
) => [() => Promise<any>, boolean, string];

export const useFetching: UseFetchingType = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetching(): Promise<any> {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error];
};

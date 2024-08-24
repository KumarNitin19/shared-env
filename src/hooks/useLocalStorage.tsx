import { useCallback } from "react";

export default function useLocalStorage() {
  // Get value from localStorage
  const getItem = useCallback((key: string) => {
    const response = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) || "")
      : null;
    if (response) {
      return JSON.parse(response);
    }
    return response;
  }, []);

  // Set value from localStorage
  const setItem = useCallback((key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  // Remove value from localStorage
  const removeItem = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);

  return { getItem, setItem, removeItem };
}

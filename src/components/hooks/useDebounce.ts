import { useEffect, useState } from "react";

export const useDebounce = (target: Record<string, string>, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(target);
  
  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(target), delay);

    return () => clearTimeout(handler);

  }, [target, delay]);

  return debounceValue;
};

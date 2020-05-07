import { useState, useEffect } from "react";

// Custom Hook to be able to reuse the filter logic and re-renders
export const useFilter = (opt: number | string) => {
  const [state, setState] = useState(opt);

  useEffect(() => {
    setState(opt);
  }, [opt]);

  return state
}

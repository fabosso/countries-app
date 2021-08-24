import { useState, useCallback } from "react";
export const useFetch = ({ fetch }) => {
  const [value, setValue] = useState(null);
  const doFetch = useCallback(async() => {
    const data = await fetch();
    setValue(data);
  },[fetch]);

  return {
    value,
    doFetch,
  };
};

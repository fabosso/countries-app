import { useState } from "react";
export const useFetch = async ({ fetch }) => {
  const [value, setValue] = useState(null);
  const data = await fetch();
  setValue(data);

  return {
    value,
    setValue,
  };
};

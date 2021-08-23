import { useState } from "react";

export const useField = ({ type }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const resetSearchValue = () => {
    setValue("");
  };

  return {
    type,
    value,
    onChange,
    resetSearchValue,
  };
};

import { useState } from "react";
import { useFieldType } from "../types/Search.type";

export type fieldParams = {
  type: string;
};

export const useField = ({ type }: fieldParams): useFieldType => {
  const [value, setValue] = useState("");

  const handleChange = (text: string): void => {
    setValue(text);
  };
  const resetSearchValue = (): void => {
    setValue("");
  };

  return {
    type,
    value,
    handleChange,
    resetSearchValue,
  };
};

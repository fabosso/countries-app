import { useState } from "react";
import { InputEvent } from "../types/EventTypes";
type fieldParams = {
  type: string;
};
type useFieldType = {
  type: string;
  value: any;
  onChange: (event: InputEvent) => void;
  resetSearchValue: () => void;
};

export const useField = ({ type }: fieldParams): useFieldType => {
  const [value, setValue] = useState<string>("");
  
  const onChange = (event: any): void => {
    setValue(event.target.value);
  };
  const resetSearchValue = (): void => {
    setValue("");
  };

  return {
    type,
    value,
    onChange,
    resetSearchValue,
  };
};

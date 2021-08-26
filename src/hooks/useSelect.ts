import { useState } from "react";
import { InputEvent } from "../types/EventTypes";

type selectParams = {
  initialState: any;
};
type useSelectType = {
  values: any;
  selectedValue: any;
  onChange: (event: InputEvent) => void;
  resetSelectValue: () => void;
};

export const useSelect = ({
  initialState = [],
}: selectParams): useSelectType => {
  
  const values = initialState;
  const [selectedValue, setSelectedValue] = useState<string>("");
  const onChange = (event: InputEvent): void => {
    setSelectedValue(event.target.value);
  };
  const resetSelectValue = (): void => {
    setSelectedValue("");
  };

  return {
    values,
    selectedValue,
    onChange,
    resetSelectValue,
  };
};

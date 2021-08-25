import { useState } from "react";

type selectParams = {
  initialState: any[]
}

export const useSelect = ({ initialState = [] }:selectParams) => {
  const values = initialState;
  const [selectedValue, setSelectedValue] = useState<string>("");
  const onChange = (event:any) => {
    setSelectedValue(event.target.value);
  };
  const resetSelectValue = () => {
    setSelectedValue("");
  };

  return {
    values,
    selectedValue,
    onChange,
    resetSelectValue,
  };
};

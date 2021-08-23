import { useState } from "react";

export const useSelect = ({ initialState = [] }) => {
  const values = initialState;
  const [selectedValue, setSelectedValue] = useState("");
  const onChange = (event) => {
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

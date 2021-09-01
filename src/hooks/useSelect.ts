import { useState } from "react";
import { RegionsType } from "../types/Regions.type";
import { useSelectType } from "../types/Select.type";
type selectParams = {
  initialState: RegionsType;
};

export const useSelect = ({ initialState }: selectParams): useSelectType => {
  const values = initialState;
  const [selectedValue, setSelectedValue] = useState<string>("");
  const onChangeFilter = (regionName: string): void => {
    setSelectedValue(regionName);
  };
  const resetSelectValue = (): void => {
    setSelectedValue("");
  };

  return {
    values,
    selectedValue,
    onChangeFilter,
    resetSelectValue,
  };
};

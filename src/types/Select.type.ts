import { RegionsType } from "./Regions.type";

export interface SelectType {
  values: RegionsType;
  selectedValue: string;
  onChangeFilter: (regionName: string) => void;
}
export interface useSelectType extends SelectType {
  resetSelectValue: () => void;
}

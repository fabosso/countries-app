import { RegionsType } from "../types/Regions.type";

export const getKeyByValue = (
  object: RegionsType,
  value: string
): string | undefined => {
  return Object.keys(object).find((key: string) => object[key] === value);
};

import { SelectType } from "../types/Select.type";
import { CountryCardType } from "../types/CountryCard.type";
import { SearchType } from "../types/Search.type";

export interface useGridTypes {
  countries: CountryCardType[] | null;
  search: SearchType;
  select: SelectType;
  resetSearchValue: () => void;
  resetSelectValue: () => void;
}

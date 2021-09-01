import { CountryCardType } from "../types/CountryCard.type";

type filterParams = {
  countries: CountryCardType[];
  word: string;
  region: string;
};
export const filterCountryOrRegion = ({
  countries,
  word = "",
  region = "",
}: filterParams) => {
  return countries.filter((data: CountryCardType): CountryCardType | null => {
    // early return: no word or region selected
    if (!word && !region) return data;

    const nameMatching = data.name
      .toLowerCase()
      .includes(word.trim().toLowerCase());
    const regionMatching =
      !region || data.region.toLowerCase() === region.toLowerCase();
    if (nameMatching && regionMatching) {
      return data;
    }

    // late return: no match found
    return null;
  });
};

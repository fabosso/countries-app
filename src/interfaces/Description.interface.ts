type CurrencyType = {
  code: string;
  name: string;
  symbol: string;
};

type LanguageType = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type CountryDescType = {
  currencies: CurrencyType[];
  languages: LanguageType[];
  flag: string;
  name: string;
  nativeName: string;
  topLevelDomain: string[];
  capital: string;
  region: string;
  subregion: string;
  population: null | number;
  borders: null | string[];
};

export interface useDescriptionTypes {
  country: CountryDescType;
  countryFound: boolean;
}

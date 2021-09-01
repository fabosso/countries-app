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
  currencies: CurrencyType[] | null;
  languages: LanguageType[] | null;
  flag: string;
  name: string;
  nativeName: string | null;
  topLevelDomain: string[] | null;
  capital: string | null;
  region: string | null;
  subregion: string | null;
  population: number | null;
  borders: string[] | null;
};

export interface useDescriptionTypes {
  country: CountryDescType;
  countryFound: boolean;
}

import get from "axios";

export const BASE_URL = "https://restcountries.eu/";
export const API_URL = BASE_URL + "/rest/v2";

export const getAll = async () => {
  const { data } = await get(
    `${API_URL}/all?fields=flag;name;population;region;capital;alpha3Code`
  );
  return data;
};

export const getInfoByCode = async (code: string) => {
  if (!(code.length === 2 || code.length === 3)) {
    return null;
  }
  const { data } = await get(
    `${API_URL}/alpha/${code}?fields=flag;name;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;nativeName`
  );
  return data;
};

export const getNameByCode = async (code: string) => {
  if (!(code.length === 2 || code.length === 3)) {
    return null;
  }
  const {
    data: { name },
  } = await get(`${API_URL}/alpha/${code}?fields=name`);
  return name;
};

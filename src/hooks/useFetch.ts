import { useState, useCallback } from "react";
import { CountryCardType } from "../types/CountryCard.type";
type valueType = CountryCardType[] | null;
type fetchParams = {
  fetch: Function;
};
type useFetchType = {
  value: valueType;
  doFetch: () => Promise<void>;
};
export const useFetch = ({ fetch }: fetchParams): useFetchType => {
  const [value, setValue] = useState<valueType>(null);

  const doFetch = useCallback(async () => {
    const data = await fetch();
    setValue(data);
  }, [fetch]);

  return {
    value,
    doFetch,
  };
};

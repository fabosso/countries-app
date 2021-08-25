import { useState, useCallback } from "react";
type fetchParams = {
  fetch: Function
}
type useFetchType = {
  value:any,
  doFetch:()=>Promise<any>
}
export const useFetch = ({ fetch }:fetchParams):useFetchType => {
  const [value, setValue] = useState<any>(null);
  const doFetch = useCallback(async() => {
    const data = await fetch();
    setValue(data);
  },[fetch]);

  return {
    value,
    doFetch,
  };
};

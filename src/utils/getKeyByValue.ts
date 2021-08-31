export const getKeyByValue = (
  object: any,
  value: string
): string | undefined => {
  return Object.keys(object).find((key: string) => object[key] === value);
};




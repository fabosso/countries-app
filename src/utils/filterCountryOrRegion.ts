type filterParams = {
  countries: any;
  word: string;
  region: string;
};
export const filterCountryOrRegion = ({
  countries,
  word="",
  region="",
}: filterParams):any => {
  
  return countries.filter((data: any, index: number): any => {
    if (!word && !region) {
      return data;
    } else if (
      (data.name.toLowerCase().includes(word.toLowerCase())) &&
      (region && data.region.toLowerCase() === region.toLowerCase())
    ) {
      return data;
    }
    return null;
  });
};

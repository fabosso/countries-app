export const filterCountryOrRegion = ({ countries, word, region }) => {
    return countries.filter((data, index) => {
      if (!word && !region) {
        return data;
      } else if (
        (word && data.name.toLowerCase().includes(word.toLowerCase())) ||
        (region && data.region.toLowerCase() === region.toLowerCase())
      ) {
        return data;
      }
      return null;
    });
  };
  
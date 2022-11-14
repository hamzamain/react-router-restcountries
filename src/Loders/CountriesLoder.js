export const CountriesLoder = async () => {
  const lodedDataJson = await fetch("https://restcountries.com/v3.1/all");
  const countries = await lodedDataJson.json();
  return countries;
};

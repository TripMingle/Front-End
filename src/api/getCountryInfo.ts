import { getFetch } from '.';

export const getCountryByContinent = async (continent: string) => {
  return getFetch(`/continent/${continent}`);
};

export const getCountryByKeyword = async (keyword: string) => {
  return getFetch(`/country/search/${keyword}`);
};

export const getCountryInfo = async (country: string) => {
  return getFetch(`/country/${country}`);
};

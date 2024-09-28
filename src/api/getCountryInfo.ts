import { apiFetch } from '.';

export const getCountryByContinent = async (continent: string) => {
  return apiFetch(`/continent/${continent}`);
};

export const getCountryByKeyword = async (keyword: string) => {
  return apiFetch(`/country/search/${keyword}`);
};

export const getCountryInfo = async (country: string) => {
  return apiFetch(`/country/${country}`);
};

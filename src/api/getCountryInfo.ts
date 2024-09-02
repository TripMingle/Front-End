import apiFetch from '.';

export const getCountryByContinent = async (continent: string) => {
  return apiFetch().get(`/continent/${continent}`);
};

export const getCountryByKeyword = async (keyword: string) => {
  return apiFetch().get(`/country/search/${keyword}`);
};

export const getCountryInfo = async (country: string) => {
  return apiFetch().get(`/country/${country}`);
};

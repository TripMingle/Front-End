export const formatCountryUrl = (country: string) => {
  return country.replace(/\s+/g, '').toLowerCase();
};

export const getCountryName = (pathname: string) => {
  return pathname.split('/')[1];
};

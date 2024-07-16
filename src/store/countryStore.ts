import { create } from 'zustand';

type CountryState = {
  continent: string;
  country: string;
  countryUrl: string;
  setContinent: (continent: string) => void;
  setCountry: (country: string) => void;
  setCountryUrl: (url: string) => void;
};

export const useCountryStore = create<CountryState>()((set) => ({
  continent: '',
  country: '',
  countryUrl: '',
  setContinent: (continent) =>
    set((state) => ({
      continent: continent,
    })),
  setCountry: (country) =>
    set((state) => ({
      country: country,
    })),
  setCountryUrl: (url) => set((state) => ({ countryUrl: url })),
}));

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type CountryState = {
  continent: string;
  continentKor: string;
  country: string;
  countryKor: string;
  countryUrl: string;
  setContinent: (continent: string, continentKor: string) => void;
  setCountry: (country: string, countryKor: string) => void;
  setCountryUrl: (url: string) => void;
};

export const useCountryStore = create<CountryState>()(
  persist(
    (set) => ({
      continent: '',
      continentKor: '',
      country: '',
      countryKor: '',
      countryUrl: '',
      setContinent: (continent: string, continentKor: string) =>
        set({ continent, continentKor }),
      setCountry: (country: string, countryKor: string) =>
        set({ country, countryKor }),
      setCountryUrl: (url: string) => set({ countryUrl: url }),
    }),
    {
      name: 'country-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type CountryState = {
  continent: string;
  country: string;
  countryUrl: string;
  setContinent: (continent: string) => void;
  setCountry: (country: string) => void;
  setCountryUrl: (url: string) => void;
};

export const useCountryStore = create<CountryState>()(
  persist(
    (set) => ({
      continent: '',
      country: '',
      countryUrl: '',
      setContinent: (continent: string) => set({ continent }),
      setCountry: (country: string) => set({ country }),
      setCountryUrl: (url: string) => set({ countryUrl: url }),
    }),
    {
      name: 'country-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

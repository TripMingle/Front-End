import { create } from 'zustand';
import { CountryType } from '@/types/main/country';

interface CountryState {
  countries: CountryType[];
  continent: string;
  continentKor: string;
  setContinent: (continent: string, continentKor: string) => void;
  setCountries: (countries: CountryType[]) => void;
  initialize: () => void;
}

export const useCountryStore = create<CountryState>((set) => ({
  countries: [],
  continent: '',
  continentKor: '',
  setContinent: (continent, continentKor) => set({ continent, continentKor }),
  setCountries: (countries) => set({ countries }),
  initialize: () =>
    set({
      countries: [],
      continent: '',
      continentKor: '',
    }),
}));

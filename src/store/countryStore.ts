import { create } from 'zustand';
import { CountryType } from '@/types/main/country';

interface CountryState {
  countries: CountryType[];
  continent: string;
  continentKor: string;
  countrySearch: string;
  setContinent: (continent: string, continentKor: string) => void;
  setCountries: (countries: CountryType[]) => void;
  setCountrySearch: (countrySearch: string) => void;
  initialize: () => void;
}

export const useCountryStore = create<CountryState>((set) => ({
  countries: [],
  continent: '',
  continentKor: '',
  isLoading: true,
  countrySearch: '',
  setContinent: (continent, continentKor) => set({ continent, continentKor }),
  setCountries: (countries) => set({ countries }),
  setCountrySearch: (countrySearch) => set({ countrySearch }),
  initialize: () =>
    set({
      countries: [],
      continent: '',
      continentKor: '',
      countrySearch: '',
    }),
}));

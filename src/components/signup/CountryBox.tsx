'use client';
import { useState } from 'react';
import FormField from './FormField';
import { error, inputContent } from '@/styles/signup/page.css';
import { useFormContext } from 'react-hook-form';
import { UserSignupType } from '@/types/country/user';
import { countries } from '@/utils/client/country';
import { throttle } from '@/utils/client/form';
import CountryBoxList from './CountryBoxList';

type CountryType = {
  countryEng: string;
  countryKor: string;
};

const CountryBox = () => {
  const {
    setValue,
    setFocus,
    trigger,
    resetField,
    formState: { errors },
  } = useFormContext<UserSignupType>();

  const [keyword, setKeyword] = useState<string>('');
  const [countryList, setCountryList] = useState<CountryType[]>([]);

  const closeCountryList = () => {
    if (countryList.length > 0) {
      setCountryList([]);
    }
  };

  const handleCountry = (eng: string, kor: string) => {
    setKeyword(kor);
    setValue('nationality', eng, { shouldValidate: true });
    closeCountryList();
  };

  const handleSearch = throttle(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (!value) {
        closeCountryList();
        return;
      }
      const filtered = countries.filter(
        (country) =>
          country.countryEng.toLowerCase().includes(value.toLowerCase()) ||
          country.countryKor.includes(value),
      );

      setCountryList(filtered);
    },
    500,
  );

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      // 설정안하면 event가 두번 작동하게 됨.
      if (event.nativeEvent.isComposing) {
        return;
      }
      event.preventDefault();
      const isValid = await trigger('nationality');
      if (isValid) {
        setFocus('phoneNumber');
      }
    }
  };

  return (
    <>
      <FormField title="국적" required={true}>
        <input
          className={inputContent({
            state: errors.nationality ? 'error' : 'default',
          })}
          value={keyword}
          type="text"
          placeholder="나라를 입력해주세요."
          onChange={(e) => {
            resetField('nationality');
            setKeyword(e.target.value);
            handleSearch(e);
          }}
          tabIndex={7}
          onKeyDown={handleKeyDown}
        />
        {countryList && (
          <CountryBoxList
            countries={countryList}
            countryHandler={handleCountry}
            closeHandler={closeCountryList}
          />
        )}
        {errors.nationality && (
          <div className={error}>{errors.nationality.message}</div>
        )}
      </FormField>
    </>
  );
};

export default CountryBox;

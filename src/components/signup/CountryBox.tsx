'use client';
import { useState } from 'react';
import CountrySearch from './CountrySearch';
import FormField from './FormField';
import useModal from '@/hooks/useModal';
import { inputContent } from '@/styles/signup/page.css';
import { useFormContext } from 'react-hook-form';
import { UserSignupType } from '@/types/country/user';

const CountryBox = () => {
  const { setValue } = useFormContext<UserSignupType>();

  const [nationality, setNationaliy] = useState<string[]>([]);
  const { isOpen, openModal, closeModal } = useModal();

  const nationalityHandler = (nationality: string[]) => {
    setNationaliy(nationality);
    setValue('nationality', nationality[0]);
  };

  return (
    <>
      <FormField title="국적" required={true}>
        <span
          className={inputContent({ select: !!nationality[0] })}
          onClick={openModal}
        >
          {nationality[1] || '나라 선택'}
        </span>
      </FormField>
      {isOpen ? (
        <CountrySearch
          isOpen={isOpen}
          handler={nationalityHandler}
          closeModal={closeModal}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default CountryBox;

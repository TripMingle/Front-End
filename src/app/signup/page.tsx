'use client';

import * as styles from '@/styles/signup/page.css';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import { FormProvider, useForm } from 'react-hook-form';
import { UserSignupType, UserSingupDefault } from '@/types/country/user';
import GenderBox from '@/components/signup/GenderBox';
import NickNameBox from '@/components/signup/NickNameBox';
import CountryBox from '@/components/signup/CountryBox';
import PhoneBox from '@/components/signup/PhoneBox';
import BirthBox from '@/components/signup/BirthBox';
import NameBox from '@/components/signup/NameBox';
import IntroductionBox from '@/components/signup/IntroductionBox';
import { useEffect } from 'react';
import { kakaoSignup } from '@/api/user';

const Page = () => {
  const methods = useForm<UserSignupType>({
    defaultValues: UserSingupDefault,
  });

  const { handleSubmit } = methods;

  const router = useRouter();
  const login = useUserStore((state) => state.login);

  const onSubmit = async (data: UserSignupType) => {
    console.log(data);
    try {
      const response = await kakaoSignup(data);
      if (typeof response === 'string') {
        alert('이미 사용 중인 닉네임입니다.');
        return;
      }
      login(response.data.profileImage, response.data.nickName);
      const prev = sessionStorage.getItem('prevPage');
      if (prev) {
        sessionStorage.removeItem('prevPage');
        router.push(prev);
      } else {
        router.push('/');
      }
    } catch (error) {
      alert('회원가입 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  useEffect(() => {
    // GenderBox
    methods.register('gender', {
      required: '성별을 선택해주세요.',
    });

    methods.register('nationality', {
      required: '국적을 선택해주세요.',
    });
  }, []);

  return (
    <div className={styles.pageContainer}>
      <FormProvider {...methods}>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className={styles.welcomeText}>환영합니다!</p>
          <span className={styles.explain}>
            <span className={styles.red}>*</span>는 필수항목 입니다.
          </span>
          <div className={styles.formContent}>
            <NameBox />
            <NickNameBox />
            <BirthBox />
            <GenderBox />
            <CountryBox />
            <PhoneBox />
            <IntroductionBox />
          </div>
          <div className={styles.formButton}>
            <button type="submit" className={styles.buttonContent}>
              완료
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Page;

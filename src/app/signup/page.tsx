'use client';
import '@/styles/font.css';
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
import { kakaoSignup } from '@/api/user';
import { useEffect } from 'react';
import { removeKakaoAuthorization } from '@/utils/server/token';

const Page = () => {
  const methods = useForm<UserSignupType>({
    defaultValues: UserSingupDefault,
  });

  const {
    handleSubmit,
    formState: { isValid },
    watch,
  } = methods;

  const router = useRouter();
  const login = useUserStore((state) => state.login);

  const onSubmit = async (data: UserSignupType) => {
    // 필수 필드 검증
    if (
      !data.name ||
      !data.nickName ||
      !data.birthDay ||
      !data.gender ||
      !data.phoneNumber
    ) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }

    // 여기서 회원가입 API 호출
    try {
      const response = await kakaoSignup(data);
      if (typeof response === 'string') {
        alert('이미 사용 중인 닉네임입니다.');
        return;
      }
      removeKakaoAuthorization();
      login(response.data.profileImage, response.data.nickName);
      const prev = window.sessionStorage.getItem('prevPage');
      if (prev) {
        window.sessionStorage.removeItem('prevPage');
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
    // BirthBox
    methods.register('birthDay', {
      required: '생년월일은 필수입니다',
    });

    // GenderBox
    methods.register('gender', {
      required: '성별을 선택해주세요',
      validate: (value) =>
        value === 'male' || value === 'female' || '올바른 성별을 선택해주세요',
    });

    methods.register('nationality', {
      required: '국적을 선택해주세요.',
      validate: (value) => value !== '' || '국적을 선택해주세요.',
    });
  }, []);

  return (
    <>
      <div className={styles.pageContainer}>
        <p className={styles.text}>환영합니다!</p>
        <span className={styles.explain}>
          <span className={styles.red}>*</span>는 필수항목 입니다.
        </span>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.contentContainer}>
              <NameBox />
              <NickNameBox />
              <BirthBox />
              <GenderBox />
              <CountryBox />
              <PhoneBox />
              <IntroductionBox />
            </div>
            <button
              type="submit"
              className={styles.signupButton({
                select: isValid,
              })}
              disabled={!isValid}
            >
              완료
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Page;

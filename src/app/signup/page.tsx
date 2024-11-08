'use client';
import '@/styles/font.css';
import NonProfileHeader from '@/components/header/NonProfileHeader';
import * as styles from '@/styles/signup/page.css';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';
import { FormProvider, useForm } from 'react-hook-form';
import { UserSignupType, UserSingupDefault } from '@/types/country/user';
import TextBox from '@/components/signup/TextBox';
import GenderBox from '@/components/signup/GenderBox';
import NickNameBox from '@/components/signup/NickNameBox';
import CountryBox from '@/components/signup/CountryBox';

const Page = () => {
  const methods = useForm<UserSignupType>({
    defaultValues: UserSingupDefault,
  });

  const router = useRouter();
  const login = useUserStore((state) => state.login);

  const signupHandler = async () => {
    // if (!!nickName && !!nationality[0]) {
    //   const nickName = watch('nickName');
    //const data = await kakaoSignup(nickName, nationality[0], introduction);
    // if (typeof data === 'string') {
    //   // 회원 가입 했을 때 닉네임이 중복된 경우 에러 메세지(data)를 리턴해준다.
    //   setIsNickNameAvailable(false);
    //   setNickNameResult('이미 사용 중인 닉네임입니다.');
    // } else if (data) {
    //   // 회원가입에 성공했을 때
    //   login(data.data.profileImage, data.data.nickName);
    //   const prev = window.sessionStorage.getItem('prevPage');
    //   if (prev) {
    //     window.sessionStorage.removeItem('prevPage');
    //     router.push(prev);
    //   } else router.push('/');
    // }
    // }
  };

  return (
    <>
      <NonProfileHeader />
      <div className={styles.pageContainer}>
        <p className={styles.text}>환영합니다!</p>
        <span className={styles.explain}>
          <span className={styles.red}>*</span>는 필수항목 입니다.
        </span>
        <FormProvider {...methods}>
          <div className={styles.contentContainer}>
            <TextBox
              title="이름"
              placeholder="이름을 입력하세요."
              required={true}
              registerTitle="name"
              tabIndex={1}
            />
            <NickNameBox />
            <GenderBox />
            <CountryBox />
            <TextBox
              title="자기소개"
              placeholder="자기 소개를 입력하세요.(선택 사항)"
              required={false}
              registerTitle="selfIntroduction"
              tabIndex={7}
            />
          </div>
          <button
            className={styles.signupButton({
              select: true,
            })}
            onClick={signupHandler}
          >
            완료
          </button>
        </FormProvider>
      </div>
    </>
  );
};

export default Page;

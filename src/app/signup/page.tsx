'use client';
import '@/styles/font.css';
import NonProfileHeader from '@/components/header/NonProfileHeader';
import * as styles from '@/styles/signup/page.css';
import { useState } from 'react';
import { checkNickName, kakaoSignup } from '@/api/user';
import CountrySearch from '@/components/signup/CountrySearch';
import useModal from '@/hooks/useModal';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/userStore';

const Page = () => {
  // 닉네임 특수문자나 다른 공백 확인용
  const regex = /^[가-힣a-zA-Z0-9_-]+$/;

  const [nickName, setNickName] = useState<string>('');
  const [nickNameInput, setNickNameInput] = useState<string>('');
  const [nickNameResult, setNickNameResult] = useState<string>('');
  const [isNickNameAvailable, setIsNickNameAvailable] =
    useState<boolean>(false);

  const [nationality, setNationaliy] = useState<string[]>([]);

  const [introduction, setIntroduction] = useState<string>('');

  const { isOpen, openModal, closeModal } = useModal();

  const router = useRouter();
  const login = useUserStore((state) => state.login);

  const nickNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNickNameInput(event.target.value);
  };

  const nationalityHandler = (nationality: string[]) => {
    setNationaliy(nationality);
  };

  const introductionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIntroduction(event.target.value);
  };

  const checkDuplilcated = async () => {
    setNickName('');
    console.log(regex.test(nickNameInput));
    if (regex.test(nickNameInput)) {
      const data = await checkNickName(nickNameInput);
      const result = !data.data.duplicationStatus;
      setIsNickNameAvailable(result);
      if (result) {
        setNickName(nickNameInput);
        setNickNameResult('사용 가능한 닉네임입니다.');
      } else {
        setNickNameResult('이미 사용 중인 닉네임입니다.');
      }
    } else {
      setIsNickNameAvailable(false);
      setNickNameResult(
        '닉네임이 유효하지 않습니다. 닉네임은 영문자, 숫자, 밑줄 및 하이픈만 포함할 수 있으며 공백이나 특수 문자를 포함할 수 없습니다',
      );
    }
  };

  const signupHandler = async () => {
    if (!!nickName && !!nationality[0]) {
      const data = await kakaoSignup(nickName, nationality[0], introduction);

      if (typeof data === 'string') {
        // 회원 가입 했을 때 닉네임이 중복된 경우 에러 메세지(data)를 리턴해준다.
        setIsNickNameAvailable(false);
        setNickNameResult('이미 사용 중인 닉네임입니다.');
      } else if (data) {
        // 회원가입에 성공했을 때
        login(data.data.profileImage, data.data.nickName);
        const prev = window.sessionStorage.getItem('prevPage');
        if (prev) {
          window.sessionStorage.removeItem('prevPage');
          router.push(prev);
        } else router.push('/');
      }
    }
  };

  return (
    <>
      <NonProfileHeader />
      <div className={styles.pageContainer}>
        <p className={styles.text}>환영합니다!</p>
        <div className={styles.contentContainer}>
          <div className={styles.fieldContainer}>
            <p className={styles.title}>닉네임</p>
            <div className={styles.nickNameContainer}>
              <input
                className={styles.container({ select: true })}
                type="text"
                placeholder="닉네임을 입력하세요."
                value={nickNameInput}
                onChange={nickNameChangeHandler}
              />
              <button
                className={styles.nickNameButton}
                onClick={checkDuplilcated}
              >
                중복 확인
              </button>
            </div>
            <span
              className={styles.nickNameResult({ result: isNickNameAvailable })}
            >
              {nickNameResult}
            </span>
          </div>
          <div className={styles.fieldContainer}>
            <p className={styles.title}>국적</p>
            <div className={styles.nickNameContainer}>
              <span
                className={styles.container({ select: !!nationality[0] })}
                onClick={openModal}
              >
                {nationality[1] || '나라 선택'}
              </span>
            </div>
          </div>
          <div className={styles.fieldContainer}>
            <p className={styles.title}>자기소개</p>
            <div className={styles.nickNameContainer}>
              <input
                className={styles.container({ select: true })}
                type="text"
                placeholder="자기 소개를 입력하세요.(선택 사항)"
                value={introduction}
                onChange={introductionHandler}
              />
            </div>
          </div>
        </div>
        <button
          className={styles.signupButton({
            select: !!nickName && !!nationality[0],
          })}
          onClick={signupHandler}
        >
          완료
        </button>
      </div>
      {isOpen && (
        <CountrySearch handler={nationalityHandler} closeModal={closeModal} />
      )}
    </>
  );
};

export default Page;

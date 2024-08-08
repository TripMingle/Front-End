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
  const [nickName, setNickName] = useState<string>('kimminji');
  const [nickNameInput, setNickNameInput] = useState<string>('');
  const [nationality, setNationaliy] = useState<string[]>([]);

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [nickNameResult, setNickNameResult] = useState<boolean>(false);

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

  const checkDuplilcated = async () => {
    // TODO :: 서버에서 중복확인 함수 제대로 작동되면 결과에 따라 setNickNameResult 값 변경
    const data = await checkNickName(nickNameInput);
    const result = !data.data.duplicationStatus;
    if (!isChecked) setIsChecked(!isChecked);
    setNickNameResult(result);
    if (result) setNickName(nickNameInput);
  };

  const signupHandler = async () => {
    if (!!nickName && !!nationality[0]) {
      const data = await kakaoSignup(nickName, nationality[0]);
      if (data.data) {
        login(data.data.profileImage, data.data.nickName);
        const prev = window.sessionStorage.getItem('prevPage');
        if (prev) {
          window.sessionStorage.removeItem('prev');
          router.push(prev);
        } else router.push('/');
      } else if (typeof data === 'string') {
        // 화면에 에러 메시지 보여주기
        setNickNameResult(false);
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
            <span className={styles.nickNameResult({ result: nickNameResult })}>
              {isChecked
                ? nickNameResult
                  ? '사용 가능한 닉네임 입니다.'
                  : '이미 사용된 닉네임 입니다.'
                : ''}
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

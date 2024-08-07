'use client';
import '@/styles/font.css';
import NonProfileHeader from '@/components/header/NonProfileHeader';
import * as styles from '@/styles/signup/page.css';
import { useState } from 'react';
import { checkNickName } from '@/api/user';
import CountrySearch from '@/components/signup/CountrySearch';
import useModal from '@/hooks/useModal';

const Page = () => {
  const [nickName, setNickName] = useState<string>('');
  const [nickNameInput, setNickNameInput] = useState<string>('');
  const [nationality, setNationaliy] = useState<string[]>([]);

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [nickNameResult, setNickNameResult] = useState<boolean>(false);

  const { isOpen, openModal, closeModal } = useModal();

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
    const data = await checkNickName(nickName);
    if (!isChecked) setIsChecked(!isChecked);
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

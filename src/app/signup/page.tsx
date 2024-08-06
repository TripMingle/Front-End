'use client';
import '@/styles/font.css';
import NonProfileHeader from '@/components/header/NonProfileHeader';
import * as styles from '@/styles/signup/page.css';
import { useEffect, useState } from 'react';
import { checkNickName, kakaoSignup } from '@/api/user';

const Page = () => {
  const [nickName, setNickName] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [nickNameResult, setNickNameResult] = useState<boolean>(false);

  const checkDuplilcated = async () => {
    const data = await checkNickName(nickName);
    if (!isChecked) setIsChecked(!isChecked);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
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
                className={styles.container}
                type="text"
                placeholder="닉네임을 입력하세요."
                value={nickName}
                onChange={changeHandler}
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
        </div>
      </div>
    </>
  );
};

export default Page;

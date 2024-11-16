'use client';
import ProfileEditor from '@/components/common/ProfileEditor';
import * as styles from '@/styles/mypage/info/page.css';
import { useState } from 'react';

const Page = () => {
  const [newProfile, setNewProfile] = useState<File | null>(null);

  const imageChangeHandler = (file: File | null) => {
    setNewProfile(file);
  };

  return (
    <div className={styles.container}>
      <ProfileEditor imageChangeHandler={imageChangeHandler} imageUrl="" />
      <div className={styles.fieldContainer}>
        <p className={styles.fieldTitle}>이름</p>
        <span className={styles.fieldValue}>머</span>
      </div>
      <div className={styles.fieldContainer}>
        <p className={styles.fieldTitle}>닉네임</p>
        <span className={styles.fieldValue}>머</span>
      </div>
    </div>
  );
};
export default Page;

'use client';

import * as styles from '@/styles/components/common/profile-editor.css';
import { useRef, useState } from 'react';
import Profile from './Profile';
import Image from 'next/image';
import { checkImageType, resizeImage } from '@/utils/client/image';

type Props = {
  imageChangeHandler: (file: File | null) => void;
  imageUrl: string;
};

const ProfileEditor = ({ imageChangeHandler, imageUrl }: Props) => {
  const [previewUrl, setPreviewUrl] = useState<string>(imageUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const imageHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!checkImageType(file)) {
      alert('JPG 또는 PNG 파일만 업로드 가능합니다.');
      e.target.value = '';
      return;
    }

    try {
      const resizedFile = await resizeImage(file);
      imageChangeHandler(resizedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(resizedFile);
    } catch (error) {
      alert('이미지 처리 중 오류가 발생했습니다.');
      console.error('Image processing error:', error);
    } finally {
      e.target.value = '';
    }
  };

  const removeImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    imageChangeHandler(null);
    setPreviewUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <div className={styles.imageContainer}>
        <Profile
          url={previewUrl}
          width={80}
          height={80}
          changeWidth={80}
          changeHeight={80}
        />
        <button
          className={styles.editButton}
          onClick={() => fileInputRef.current?.click()}
        >
          <Image src="/icons/edit.svg" width={10} height={10} alt="imageEdit" />
        </button>
        <button className={styles.removeButton} onClick={removeImage}>
          ×
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className={styles.inputImage}
        onChange={imageHandler}
      />
    </div>
  );
};

export default ProfileEditor;

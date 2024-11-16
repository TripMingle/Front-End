const ALLOWED_TYPES = ['image/jpeg', 'image/png'];
const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png'];

export const checkImageType = (file: File) => {
  // 1. 확장자 검사
  const ext = file.name.split('.').pop()?.toLowerCase();
  if (!ext || !ALLOWED_EXTENSIONS.includes(ext)) {
    return false;
  }

  // 2. MIME 타입 검사
  if (!ALLOWED_TYPES.includes(file.type)) {
    return false;
  }

  return true;
};

const MAX_WIDTH = 210;
const MAX_HEIGHT = 210;

export const resizeImage = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    // 에러 핸들러를 올바른 위치로 이동
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('이미지 로드에 실패했습니다'));
    };

    img.src = objectUrl;

    img.onload = () => {
      try {
        // url 메모리 해제
        URL.revokeObjectURL(objectUrl);

        // 기존 이미지의 width, height
        let { width, height } = img;

        // 이미지가 이미 충분히 작은 경우 원본 반환
        if (width <= MAX_WIDTH && height <= MAX_HEIGHT) {
          resolve(file);
          return;
        }

        // 비율 계산
        const aspectRatio = width / height;

        // 크기 조정
        if (width > height) {
          // 가로가 긴 사진
          width = MAX_WIDTH;
          height = Math.round(width / aspectRatio);
        } else {
          // 세로가 긴 사진
          height = MAX_HEIGHT;
          width = Math.round(height * aspectRatio);
        }

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          throw new Error('Canvas context를 생성할 수 없습니다');
        }

        canvas.width = width;
        canvas.height = height;

        // 이미지 품질 향상을 위한 설정
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob: Blob | null) => {
            if (!blob) {
              reject(new Error('이미지 리사이징에 실패했습니다'));
              return;
            }

            const resizedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: file.lastModified,
            });

            resolve(resizedFile);
          },
          file.type,
          0.92, // JPEG 품질 설정 (92%는 보통 좋은 품질과 파일 크기의 균형점)
        );
      } catch (error) {
        reject(error);
      }
    };
  });
};

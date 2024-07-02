import Image from 'next/image';
import { profile } from '@/styles/components/common/profile.css';

const Profile = ({
  url,
  width,
  height,
}: {
  url: string;
  width: number;
  height: number;
}) => {
  return (
    <Image
      src={url ? url : '/icons/profile.svg'}
      width={width}
      height={height}
      alt="profile"
      className={profile}
    />
  );
};

export default Profile;

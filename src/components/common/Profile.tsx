import Image from 'next/image';
import {
  profile,
  cWidth,
  cHeight,
} from '@/styles/components/common/profile.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

type Props = {
  url: string;
  width: number;
  height: number;
  changeWidth: number;
  changeHeight: number;
};

const Profile = (props: Props) => {
  const width = props.changeWidth + 'px';
  const height = props.changeHeight + 'px';

  return (
    <Image
      src={props.url || '/icons/profile.svg'}
      width={props.width}
      height={props.height}
      alt="profile"
      className={profile}
      style={assignInlineVars({
        [cWidth]: width,
        [cHeight]: height,
      })}
    />
  );
};

export default Profile;

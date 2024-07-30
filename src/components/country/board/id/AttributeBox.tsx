import * as styles from '@/styles/country/board/id/attribute-box.css';
import WalletIcon from '@/components/common/icons/WalletIcon';
import DrinkIcon from '@/components/common/icons/DrinkIcon';
import CoupleIcon from '@/components/common/icons/CoupleIcon';
import PhotoIcon from '@/components/common/icons/PhotoIcon';
import SmokeIcon from '@/components/common/icons/SmokeIcon';
import WomanIcon from '@/components/common/icons/WomanIcon';
import ManIcon from '@/components/common/icons/ManIcon';

type Props = {
  preferGender: number;
  preferSmoking: number;
  preferBudget: number;
  preferPhoto: number;
  preferDrink: number;
};

const AttributeBox = ({ props }: { props: Props }) => {
  return (
    <div className={styles.container}>
      {props.preferGender !== 3 ? (
        <div
          className={styles.attributeContainer({
            value: false,
          })}
        >
          {props.preferGender === 1 ? (
            <ManIcon
              className={styles.icon}
              width={19}
              height={19}
              color={'#3688ff'}
            />
          ) : (
            <WomanIcon
              className={styles.icon}
              width={19}
              height={19}
              color={'#3688ff'}
            />
          )}
          <span className={styles.text}>
            {props.preferGender === 1 ? '남자선호' : '여자선호'}
          </span>
        </div>
      ) : (
        <></>
      )}
      {props.preferSmoking !== 3 ? (
        <div
          className={styles.attributeContainer({
            value: props.preferSmoking === 1,
          })}
        >
          <SmokeIcon
            className={styles.icon}
            width={19}
            height={19}
            color={props.preferSmoking === 1 ? '#B9B9B9' : '#3688ff'}
          />
          <span className={styles.text}>
            {props.preferSmoking === 1 ? '비흡연자선호' : '흡연자선호'}
          </span>
        </div>
      ) : (
        <></>
      )}
      {props.preferBudget !== 3 ? (
        <div
          className={styles.attributeContainer({
            value: props.preferBudget === 1,
          })}
        >
          <WalletIcon
            className={styles.icon}
            width={19}
            height={19}
            color={props.preferBudget === 1 ? '#B9B9B9' : '#3688ff'}
          />
          <span className={styles.text}>
            {props.preferBudget === 1 ? '가성비선호' : '여유있음'}
          </span>
        </div>
      ) : (
        <></>
      )}
      {props.preferPhoto !== 3 ? (
        <div
          className={styles.attributeContainer({
            value: props.preferPhoto === 1,
          })}
        >
          <PhotoIcon
            className={styles.icon}
            width={19}
            height={19}
            color={props.preferPhoto === 1 ? '#B9B9B9' : '#3688ff'}
          />
          <span className={styles.text}>
            {props.preferPhoto === 1 ? '사진비선호' : '사진선호'}
          </span>
        </div>
      ) : (
        <></>
      )}
      {props.preferDrink !== 3 ? (
        <div
          className={styles.attributeContainer({
            value: props.preferDrink === 1,
          })}
        >
          <DrinkIcon
            className={styles.icon}
            width={19}
            height={19}
            color={props.preferDrink === 1 ? '#B9B9B9' : '#3688ff'}
          />
          <span className={styles.text}>
            {props.preferDrink === 1 ? '음주비선호' : '음주선호'}
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AttributeBox;

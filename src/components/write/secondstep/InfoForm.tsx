import * as styles from '@/styles/write/secondstep/info-input.css';
import CalendarForm from './CalendarForm';
import LanguageForm from './LanguageForm';
import AttributeForm from './AttributeForm';
import TypeForm from './TypeForm';
import PeopleCountForm from './CapacityForm';

const InfoForm = ({
  languages,
  languagesHandler,
}: {
  languages: string[];
  languagesHandler: (eng: string, kor: string) => void;
}) => {
  return (
    <div>
      <div className={styles.fieldContainer}>
        <p className={styles.title}>날짜</p>
        <CalendarForm />
      </div>
      <div className={styles.fieldContainer}>
        <p className={styles.title}>언어</p>
        <LanguageForm
          languages={languages}
          languagesHandler={languagesHandler}
        />
      </div>
      <div className={styles.fieldContainer}>
        <p className={styles.title}>인원</p>
        <PeopleCountForm />
      </div>
      <div className={styles.fieldContainer}>
        <p className={styles.title}>동행자 특성</p>
        <AttributeForm />
      </div>
      <div className={styles.fieldContainer}>
        <p className={styles.title}>동행 타입 (중복 가능)</p>
        <TypeForm />
      </div>
    </div>
  );
};

export default InfoForm;

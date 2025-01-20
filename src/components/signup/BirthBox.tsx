import { useFormContext } from 'react-hook-form';
import FormField from './FormField';
import { UserSignupType } from '@/types/country/user';
import { inputContent } from '@/styles/signup/page.css';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import { formatCalendarDay, formatDay } from '@/utils/date';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { icon, calendar, background } from '@/styles/signup/birth-box.css';
import { calendarContainer } from '@/styles/write/secondstep/calendar-box.css';
import '@/styles/write/secondstep/calendar-custom.css';

type Value = Date | null;
type Range<T> = [T, T];

const BirthBox = () => {
  const { watch, setValue } = useFormContext<UserSignupType>();
  const { isOpen, openModal, closeModal } = useModal();

  const [birth, setBirth] = useState<Value>(null);
  const birthDay = watch('birthDay');

  const clickHandler = () => {
    if (isOpen) closeModal();
    else openModal();
  };

  const dateChangeHandler = (
    value: Value | Range<Value>,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (
      value && // 단일 Date인 경우
      value instanceof Date
    ) {
      setValue('birthDay', formatDay(value));
      closeModal();
    }
  };

  const calendarClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 전파 중단
  };

  return (
    <div className={calendarContainer}>
      <FormField title="생년월일" required={true}>
        <div
          className={inputContent({ select: !!birthDay })}
          onClick={clickHandler}
        >
          <span>{birthDay || '생년월일을 입력해주세요.'}</span>
          <Image
            className={icon}
            src="/icons/calendar.svg"
            width={20}
            height={20}
            alt="calendarIcon"
          />
          {isOpen && (
            <>
              <div className={background} onClick={closeModal} />
              <div onClick={calendarClickHandler}>
                <Calendar
                  className={calendar({ show: isOpen })}
                  locale="ko"
                  selectRange={false}
                  onChange={dateChangeHandler}
                  formatDay={formatCalendarDay}
                  maxDate={new Date()}
                  showNeighboringMonth={false}
                  minDetail="decade"
                />
              </div>
            </>
          )}
        </div>
      </FormField>
    </div>
  );
};

export default BirthBox;

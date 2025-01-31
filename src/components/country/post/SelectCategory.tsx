import * as styles from '@/styles/country/post/select-category.css';
import Good from '@/components/country/Icons/Good';
import House from '@/components/country/Icons/House';
import Calendar from '@/components/country/Icons/Calendar';
import Link from 'next/link';

const SelectCateogry = async ({
  country,
  category,
}: {
  country: string;
  category: 'rentalHome' | 'restaurant' | 'schedule';
}) => {
  return (
    <div className={styles.categoryContainer}>
      {categories.map((element) => (
        <Link href={`/${country}/post?category=${element.category}`}>
          <div
            className={styles.labelContainer({
              select: element.category === category,
            })}
          >
            {element.icon}
            {element.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

const categories = [
  {
    category: 'restaurant',
    title: '맛집',
    icon: <Good className={styles.icon} width={28} height={28} />,
  },
  {
    category: 'rentalHome',
    title: '숙소',
    icon: <House className={styles.icon} width={28} height={28} />,
  },
  {
    category: 'schedule',
    title: '일정',
    icon: <Calendar className={styles.icon} width={28} height={28} />,
  },
];

export default SelectCateogry;

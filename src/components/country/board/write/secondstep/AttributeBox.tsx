import { useState } from 'react';
import AttributeItem from './AttributeItem';

const AttributeBox = () => {
  const [gender, setGender] = useState<number>(3);
  const [smoke, setSmoke] = useState<number>(3);
  const [shopping, setShopping] = useState<number>(3);
  const [photo, setPhoto] = useState<number>(3);
  const [drink, setDrink] = useState<number>(3);

  const selectGender = (gender: number) => {
    setGender(gender);
  };

  const selectSmoke = (smoke: number) => {
    setSmoke(smoke);
  };

  const selectShopping = (shopping: number) => {
    setShopping(shopping);
  };

  const selectPhoto = (photo: number) => {
    setPhoto(photo);
  };

  const selectDrink = (drink: number) => {
    setDrink(drink);
  };

  return <div></div>;
};

const Attributes = [
  {
    title: '성별',
    explain: ['남자선호', '상관없음', '여자선호'],
    value: [1, 3, 5],
  },
];

export default AttributeBox;

import { useState } from 'react';
import GenderAttribute from './attribute/GenderAttribute';
import SmokeAttribute from './attribute/SmokeAttribute';
import PhotoAttribute from './attribute/PhotoAttribute';
import DrinkAttribute from './attribute/DrinkAttribute';
import BudgetAttribute from './attribute/BudgetAttribute';

const AttributeBox = () => {
  const [gender, setGender] = useState<number>(3);
  const [smoke, setSmoke] = useState<number>(3);
  const [photo, setPhoto] = useState<number>(3);
  const [drink, setDrink] = useState<number>(3);

  const selectGender = (gender: number) => {
    setGender(gender);
  };

  const selectSmoke = (smoke: number) => {
    setSmoke(smoke);
  };

  const selectPhoto = (photo: number) => {
    setPhoto(photo);
  };

  const selectDrink = (drink: number) => {
    setDrink(drink);
  };

  return (
    <div>
      <GenderAttribute />
      <SmokeAttribute />
      <BudgetAttribute />
      <PhotoAttribute />
      <DrinkAttribute />
    </div>
  );
};

export default AttributeBox;

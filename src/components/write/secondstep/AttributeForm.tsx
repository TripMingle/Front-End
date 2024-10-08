import GenderAttribute from './attribute/GenderAttribute';
import SmokeAttribute from './attribute/SmokeAttribute';
import PhotoAttribute from './attribute/PhotoAttribute';
import DrinkAttribute from './attribute/DrinkAttribute';
import BudgetAttribute from './attribute/BudgetAttribute';

const AttributeForm = () => {
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

export default AttributeForm;

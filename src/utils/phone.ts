export const autoHyphen = (value: string) => {
  const numbers = value.replace(/[^0-9]/g, '');

  if (numbers.length < 4) {
    return numbers;
  }
  if (numbers.length < 7) {
    return numbers.slice(0, 3) + '-' + numbers.slice(3);
  }
  if (numbers.length < 11) {
    return (
      numbers.slice(0, 3) + '-' + numbers.slice(3, 6) + '-' + numbers.slice(6)
    );
  }
  return (
    numbers.slice(0, 3) + '-' + numbers.slice(3, 7) + '-' + numbers.slice(7, 11)
  );
};

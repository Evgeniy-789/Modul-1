'use strcit';
const generateRandomArray = (count) => {
  if (typeof count !== 'number' || !Number.isFinite(count) || count < 0 || !Number.isInteger(count)) {
    throw new TypeError('count должен быть неотрицательным целым числом');
  }

  const result = [];
  for (let i = 0; i < count; i++) {
    // случайное число в диапазоне [1, 100]
    const rand = Math.floor(Math.random() * 100) + 1;
    result.push(rand);
  }
  return result;
};

console.log(generateRandomArray(10));

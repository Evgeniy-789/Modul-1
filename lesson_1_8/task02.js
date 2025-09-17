'use strict';
const generateRandomArrayInRange = (count, n, m) => {
  if (typeof count !== 'number' || !isFinite(count) || count < 0) {
    throw new Error('count должен быть неотрицательным числом');
  }
  if (typeof n !== 'number' || typeof m !== 'number' || !isFinite(n) || !isFinite(m)) {
    throw new Error('n и m должны быть действительными числами');
  }

  // Определяем минимальное и максимальное значение диапазона
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  // Если min == max, диапазон состоит из одного значения
  const rangeSize = max - min + 1;

  const arr = [];
  for (let i = 0; i < Math.floor(count); i++) {
    // Сгенерировать равномерное целое число в [min, max]
    const rand = Math.floor(Math.random() * rangeSize) + min;
    arr.push(rand);
  }
  return arr;
};
console.log( generateRandomArrayInRange(10, 20, 40));
'use strict'
const leapYearsBetween = (n, m) => {
  // Определяем диапазон границ
  const start = Math.min(n, m);
  const end = Math.max(n, m);

  const leaps = [];

  // Функция проверки високосного года по григорианскому правилу
  function isLeap(year) {
    if (year % 4 !== 0) return false;
    if (year % 100 !== 0) return true;
    if (year % 400 !== 0) return false;
    return true;
  }

  // Учёт того, что диапазон может начинаться с отрицательного года
  // Мы включаем все годы в диапазоне [start, end], включая концы
  for (let y = start; y <= end; y++) {
    if (isLeap(y)) leaps.push(y);
  }

  return leaps;
};
console.log(leapYearsBetween (100, 2000));

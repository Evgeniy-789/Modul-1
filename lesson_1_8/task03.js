const generateRandomArrayInRange = (count, n, m, filterMode) => {
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

    // Применяем фильтр по чётности, если указан
    if (typeof filterMode === 'string') {
      if (filterMode === 'even' && rand % 2 !== 0) {
        // если нечетное, пробуем найти ближайшее чётное в рамках диапазона
        // простой подход: увеличить на 1, если не выходит за max, иначе decrease на 1
        if (rand + 1 <= max) {
          arr.push(rand + 1);
          continue;
        } else if (rand - 1 >= min) {
          arr.push(rand - 1);
          continue;
        }
        // если нет возможности изменить parity, пропускаем добавление
        // но чтобы не потерять элемент, добавляем исходное значение
        // и дальше продолжим цикл
      } else if (filterMode === 'odd' && rand % 2 === 0) {
        if (rand + 1 <= max) {
          arr.push(rand + 1);
          continue;
        } else if (rand - 1 >= min) {
          arr.push(rand - 1);
          continue;
        }
      }
    }

    arr.push(rand);
  }
  return arr;
};

console.log(generateRandomArrayInRange(10, 20, 40, even));
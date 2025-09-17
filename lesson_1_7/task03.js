'use strict';
const addPrefix = (arr, prefix) => {
  // убираем лишние пробелы вокруг префикса и нормализуем точку
  const normPrefix = prefix.trim();

  // если префикс заканчивается точкой, мы не добавляем дополнительную точку
  // но по заданию между префиксом и именем должен быть пробел
  return arr.map(name => {
    // trim_name чтобы убрать лишние пробелы в элементах
    const trimmed = String(name).trim();
    // если префикс уже содержит точку в конце, оставляем как есть
    // просто добавляем пробел и имя
    return normPrefix + ' ' + trimmed;
  });
};

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const result = addPrefix(names, 'Mr');
console.log(result);
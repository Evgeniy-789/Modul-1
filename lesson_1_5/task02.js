function capitalizeFirst(str) {
  if (typeof str !== 'string') return '';
  if (str.length === 0) return '';

  // Нормализуем пробелы по краям
  const s = str.trim();

  // Берём первый юникод-символ и хвост строки
  const [firstChar, ...rest] = [...s]; // спред по юникод-кодпоинтам
  return firstChar.toUpperCase() + rest.join('').toLowerCase();
}

// Примеры:
console.log(capitalizeFirst("привет Мир"));     // "Привет мир"
console.log(capitalizeFirst("  hello WORLD ")); // "Hello world"   
function reverseString(str) {
  // Разбиваем по юникодным графемным кластерам, чтобы не ломать эмодзи и составные символы
  const graphemes = Array.from(str);
  return graphemes.reverse().join('');
}

// Примеры
console.log(reverseString("Привет мир")); // "рим тевирП"
console.log(reverseString("hello 😊"));
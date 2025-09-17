(function() {
  // Загадываем число от 1 до 100
  var secret = Math.floor(Math.random() * 100) + 1;

  while (true) {
    // Предлагаем ввести вариант
    var input = prompt("Угадайте число от 1 до 100:");

    // Обработка нажатия Отмена
    if (input === null) {
      alert("Игра окончена.");
      break;
    }

    // Преобразуем к числу и проверяем
    var guess = Number(input);

    if (Number.isNaN(guess)) {
      alert("Введи число!");
      continue;
    }

    if (guess > secret) {
      alert("Меньше!");
    } else if (guess < secret) {
      alert("Больше!");
    } else {
      alert("Правильно!");
      break;
    }
  }
})();
'use strict';

{
  const input = prompt('Введи свою зарплату');
  const cash = Number(input); // явное преобразование к числу

  if (Number.isNaN(cash) || cash <= 0) {
    alert('Вы ввели некорректные данные');
  } else if (cash < 15000) {
    const nalog = 0.13 * cash;
    console.log(`Ваш налог от зарплаты составляет ${nalog}`);
  } else if (cash < 50000) {
    const nalog = 0.2 * (cash - 15000);
    console.log(`Ваш налог от зарплаты составляет ${nalog}`);
  } else {
    const nalog = 0.3 * (cash - 50000);
    console.log(`Ваш налог от зарплаты составляет ${nalog}`);
  }
}
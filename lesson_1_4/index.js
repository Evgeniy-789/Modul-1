'use strict'
{
  const item = prompt('Введи название товара');
  const count = Number(prompt('Введи количество товара'));
  const category = prompt('Введи категорию товара');
  const price = Number(prompt('Введи цену за единицу товара'));
  
  if (!Number.isNaN(count) && !Number.isNaN(price)) {
    console.log(`На складе ${count} единиц(ы) товар(а)(ов) ${item} 
        категории ${category} на сумму ${count * price}`);
  } else {
    alert('Вы ввели некорректные данные');
  }
};
'use strict'
{  
  const item = prompt('Введи название товара');
  const count = +prompt('Введи количество товара');
  const category = prompt('Введи категорию товара');
  const price = +prompt('Введи цену за единицу товара');

  console.log(typeof(count));
  console.log(`На складе ${count} единиц(ы) товар(а)(ов) ${category} на 
     сумму ${count * price}`);
};
'use strict';

{
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const rain = random(0,1);
if(rain === 1) {console.log ('Пошел дождь. Возьмите зонт!')}
else {console/log('Дождя нет')};
};
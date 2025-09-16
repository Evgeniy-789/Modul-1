'use strict'

function isPrime(num) {
   // Проверка на нецелые числа и числа меньше 2
   if (num < 2 || !Number.isInteger(num)) {
       return false;
   };
   
   // Проверка на делимость чисел от 2 до квадратного корня из num
   for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0) {
           return false; // Если делится без остатка, то число не простое
       };
   };
   
   return true; // Если прошли все проверки, число простое
};

// Примеры использования:
console.log(isPrime(5));  // true
console.log(isPrime(10)); // false
console.log(isPrime(1));  // false
console.log(isPrime(13)); // true
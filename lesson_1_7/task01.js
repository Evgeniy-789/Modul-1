'use strict';

const filter = (allStudents, failedStudents) => {
  // Приводим массив failedStudents к множеству для быстрой проверки
  const failedSet = new Set(failedStudents);
  // Оставляем только тех, кого нет в списке не сдавших
  return allStudents.filter(student => !failedSet.has(student));
};
const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
const itogStudent = filter(allStudents, failedStudents);
console.log(itogStudent);
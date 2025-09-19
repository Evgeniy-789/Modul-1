'use strict';
'use strict';

// Объект корзины
const cart = {
  // товары в корзине
  items: [],
  // общая стоимость корзины
  totalPrice: 0,
  // общее количество единиц товара
  count: 0,

  // получить общую стоимость товаров
  getTotalPrice() {
    return this.totalPrice;
  },

  // пересчитать стоимость всей корзины с использованием reduce
  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  },

  // увеличить количество товаров (суммарный счетчик позиций)
  increaseCount(num) {
    // ожидается число; приведем к числу и проверим
    const n = Number(num);
    if (!Number.isFinite(n) || n < 0) return;
    this.count += n;
  },

  // добавить товар
  // name: string, price: number, quantity: number = 1
  add(name, price, quantity = 1) {
    // простая валидация
    if (typeof name !== 'string' || !name.trim()) {
      console.warn('add: неверное имя товара');
      return;
    }
    const p = Number(price);
    const q = Number(quantity);
    if (!Number.isFinite(p) || p < 0) {
      console.warn('add: неверная цена товара');
      return;
    }
    if (!Number.isFinite(q) || q <= 0) {
      console.warn('add: неверное количество товара');
      return;
    }

    // Сформировать объект товара
    const item = {
      name: name.trim(),
      price: p,
      quantity: q,
    };

    // Проверим, есть ли уже такой товар, чтобы объединить количества
    const existing = this.items.find((it) => it.name === item.name && it.price === item.price);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.push(item);
    }

    // Обновить счетчики
    this.increaseCount(q);
    this.calculateItemPrice();
  },

  // очистить корзину
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  // распечатать корзину в консоль
  print() {
    // JSON-строка массива items
    console.log(JSON.stringify(this.items, null, 2));
    // следующая строка — общая стоимость корзины
    console.log(`Итого: ${this.getTotalPrice()}`);
  },
};

// ===== Проверка функционала =====

// Добавим 3+ товара
cart.add('Ноутбук', 75000, 1);
cart.add('Мышь', 1500, 2);
cart.add('Коврик', 500);          // количество по умолчанию 1
cart.add('Мышь', 1500, 1);        // добавим к уже существующей позиции

// Выводим в консоль
cart.print();
'use strict';
// Объект корзины
const cart = {
  // товары в корзине
  items: [],
  // общее количество единиц товара
  count: 0,

  // геттер общей стоимости корзины (сумма считается на лету)
  get totalPrice() {
    return this.calculateItemPrice();
  },

  // пересчитать стоимость всей корзины и вернуть сумму
  calculateItemPrice() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  },

  // увеличить количество товаров (суммарный счетчик позиций)
  increaseCount(num) {
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

    // Обновить счетчики (стоимость теперь не пересчитываем здесь)
    this.increaseCount(q);
  },

  // очистить корзину
  clear() {
    this.items = [];
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

cart.add('Ноутбук', 75000, 1);
cart.add('Мышь', 1500, 2);
cart.add('Коврик', 500);
cart.add('Мышь', 1500, 1);

// Попытка подмены суммы больше не сработает
// не изменит геттер

cart.print();
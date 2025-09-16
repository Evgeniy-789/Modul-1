'use strict';
 
const calculate = (sum, items, promo) => {
  const calculateItems = (amount, count) => {
    return count > 10 ? amount * 0.97 : amount;
  };

  const applyExcessDiscount = (amount) => {
    if (amount > 30000) {
      const excess = amount - 30000;
      return 30000 + excess * 0.85;
    }
    return amount;
  };

  const applyPromo = (amount, code) => {
    let result = amount;
    if (code === 'METHED') {
      result *= 0.9;
    }
    if (code === 'G3H2Z1' && result > 2000) {
      result -= 500;
    }
    return result;
  };

  let total = Number(sum) || 0;
  const qty = Number(items) || 0;
  const code = String(promo || '').trim();

  total = calculateItems(total, qty);
  total = applyExcessDiscount(total);
  total = applyPromo(total, code);

  return Math.round(total * 100) / 100;
};

console.log(calculate(35000, 12, 'G3H2Z1'));

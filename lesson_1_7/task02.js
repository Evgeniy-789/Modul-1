const getAverageValue = (Array) => {
    const sum = Array.reduce((acc, val) => acc + val, 0);
  const avg = sum / Array.length;
  return Math.floor(avg);
};

console.log( getAverageValue([12, 35, 678, 576]));
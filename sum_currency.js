const amounts = ["0.20", "45.90", "13.21"];
const numbers = amounts.map((a) => parseFloat(a));
const sum = numbers.reduce((acc, cur) => parseFloat((acc + cur).toFixed(2)), 0);

console.log(sum);

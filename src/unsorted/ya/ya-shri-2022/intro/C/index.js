/**
 * Ознакомительный контест.
 *
 * https://contest.yandex.ru/contest/3/problems/C/
 *
 * C. A+B 3
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (input) => {
  const [a, b] = input.split(" ").map(Number);
  console.log(a + b);
});

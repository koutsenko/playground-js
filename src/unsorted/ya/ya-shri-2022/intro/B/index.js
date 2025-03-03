/**
 * Ознакомительный контест.
 *
 * https://contest.yandex.ru/contest/3/problems/B/
 *
 * B. A+B 2
 */

const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const lines = data.split(/\r?\n/);
  const input = lines[0];
  const [a, b] = input.split(" ").map(Number);
  const result = a + b;
  fs.writeFileSync("output.txt", String(result));
} catch (err) {
  console.error(err);
}

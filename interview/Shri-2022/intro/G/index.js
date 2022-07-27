/**
 * Ознакомительный контест.
 *
 * https://contest.yandex.ru/contest/3/problems/G/
 *
 * G. Камни и украшения [тестовая задача]
 */

const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "utf8");
  const lines = data.split(/\r?\n/);
  const [jewels, stones] = lines;
  let result = 0;
  for (let char of stones) {
    jewels.includes(char) && result++;
  }
  fs.writeFileSync("output.txt", String(result));
} catch (err) {
  console.error(err);
}

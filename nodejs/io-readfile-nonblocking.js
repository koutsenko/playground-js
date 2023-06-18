/**
 * Демонстрация асинхронного выполнения кода.
 *
 * Код выведет:
 * "Начало чтения файла"
 * "Конец работы"
 * "Ошибка чтения".
 */

const fs = require("node:fs");

console.log("Начало чтения файла");
fs.readFile("file.md", "utf-8", (err, content) => {
  if (err) {
    console.log("Ошибка чтения");
    return console.log(err);
  }
  console.log(content);
});
console.log("Конец работы");

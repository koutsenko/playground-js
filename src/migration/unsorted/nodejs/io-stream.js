/**
 * Демонстрация работы стрима.
 *
 * Есть массив текстовых данных.
 * Ввод в стрим элементов массива с задержкой 200 мс.
 * Вывод из стрима через пайп в консоль.
 */

const { Readable } = require("node:stream");

const stream = new Readable();
const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ... been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery ... type and scrambled it to make a type specimen book.`;
const data = lorem.split(" ");

stream._read = () => {
  if (data.length) {
    setTimeout(() => stream.push(data.shift() + " "), 200);
  } else {
    stream.push(null);
  }
};

stream.pipe(process.stdout);

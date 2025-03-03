/**
 * https://habr.com/ru/post/540136
 *
 *  Напишите программу, которая выводила бы числа от 1 до миллиарда.
 *  Если число кратно трем, то вместо числа выводится Fizz.
 *  Если число кратно пяти, то вместо числа выводится Buzz.
 *  Если число кратно и трем, и пяти, то FizzBuzz.
 */

const BENCH = 100000;
const MAX = 1000000000;

/**
 * Бенчмарк. На Ryzen 5 время выполнения:
 * - fizzBuzz1 1.210 days
 * - fizzBuzz2 1.208 days
 * - fizzBuzz3 1.142 days
 * - fizzBuzz4 1.151 days
 */
const benchmark = (fn, args) => {
  console.log(args);
  const startTime = new Date().getTime();
  fn.apply(this, args);
  const passedTimeMs = new Date().getTime() - startTime;
  const estimatedTime = (passedTimeMs * MAX) / BENCH / 1000 / 60 / 60 / 24;
  console.log("estimatedTime:", estimatedTime, "days");
};

/**
 * Реализация 1, наивная.
 */
const fizzBuzz1 = (maxNumber) => {
  for (let i = 1; i <= maxNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

/**
 * Реализация 2, попытка оптимизировать.
 *
 * Алгоритмически должна быть быстрее - в цикле for в 2 раза меньше сравнений с числом 3.
 *
 * По факту:
 * - увеличился размер тела функции - больше потребление памяти
 * - самое большое время занимают операции i\o для console.log
 * - из-за наивного бенчмарка (один прогон) - большая погрешность
 * - стала важна последовательность - первый if должен быть первым
 *
 * В итоге оптимизация незаметна.
 */
const fizzBuzz2 = (maxNumber) => {
  for (let i = 1; i <= maxNumber; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("FizzBuzz");
      } else {
        console.log("Fizz");
      }
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

/**
 * Реализация 3, простой код, упрощено условие.
 *
 * Жертвуем микрооптимизацией сравнений с числом 3 и возвращаем примитивную лесенку if-else.
 * Вместо этого оптимизируем условие - деление на 3 и на 5 одновременно означает деление на 15.
 */
const fizzBuzz3 = (maxNumber) => {
  for (let i = 1; i <= maxNumber; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

/**
 * Реализация 4, сбор строки с помощью тернарных операторов.
 *
 * Единственный вызов console.log и уходит условие проверки деления на 15.
 * Производительность примерно та же, но получается более лаконичный код.
 * Приоритет оператора + выше, чем у оператора ||, поэтому скобки не нужны.
 */
const fizzBuzz4 = (maxNumber) => {
  for (let i = 1; i <= maxNumber; i++) {
    console.log((
        (i % 5 ? "" : "Fizz") + (i % 3 ? "" : "Buzz") 
        || i)
    )
  }
};

// Бенчмарк на сокращенном диапазоне, считаем примерно минуту.
// benchmark(fizzBuzz1, [BENCH]);
// benchmark(fizzBuzz2, [BENCH]);
// benchmark(fizzBuzz3, [BENCH]);
benchmark(fizzBuzz4, [BENCH]);

// Непосредственно вызов fizzBuzz для полного диапазона.
// fizzBuzz1(MAX);
// fizzBuzz2(MAX);
// fizzBuzz3(MAX);
// fizzBuzz4(MAX);

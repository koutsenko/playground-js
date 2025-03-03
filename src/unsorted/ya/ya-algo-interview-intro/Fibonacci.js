/**
 * Рекурсивное решение без мемоизации.
 * Много повторяющихся вычислений.
 *
 * Время работы экспонента O(2^n).
 * Память O(2^n) (стек вызовов).
 */
const fib_rec = (n) => {
  let result;
  if (n <= 1) {
    result = n;
  } else {
    result = fib_rec(n - 1) + fib_rec(n - 2);
  }
  return result;
}

/**
 * Рекурсивное решение с мемоизацией.
 *
 * Время работы линейное O(n).
 * Память O(n) (стек вызовов, мемоизация).
 */
const fib_rec_mem = (n, memo = {}) => {
  // Если значение уже вычислено, то возвращаем его
  if (memo[n]) {
    return memo[n];
  }

  let result;
  if (n <= 1) {
    result = n;
  } else {
    result = fib_rec_mem(n - 1, memo) + fib_rec_mem(n - 2, memo);
  }
  // Мемоизируем значение, чтобы не вычислять его повторно
  memo[n] = result;
  return result;
}

/**
 * Итеративное решение.
 *
 * Время работы линейное O(n).
 * Память O(1). 
 */
const fib_iter = (n) => {
  let result = 0;
  let prev = 1;
  for (let i = 0; i < n; i++) {
    [result, prev] = [result + prev, result];
  }
  return result;
}

console.log(fib_rec(10));
console.log(fib_rec_mem(10));
console.log(fib_iter(10));

// TODO Здесь оптимизация хвостового вызова
// https://askdev.ru/q/hvostovaya-rekursiya-fibonachchi-430682/
// https://habr.com/ru/post/464915/
// Будет работать медленнее чем рекурсивный и итеративный вариант
// Используется в случаях когда невозможно заменить рекурсию на итерацию.
// Или если я боюсь переполнения стека при выполнении вашей рекурсивной функции.

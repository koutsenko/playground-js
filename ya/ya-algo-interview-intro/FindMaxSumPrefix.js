/**
 * Функция находит префикс с макс. суммой и возвращает эту сумму.
 * На вход принимается массив целых чисел.
 * На выходе целое число.
 */
const getMaxSumPrefix = (arr) => {
  let max_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let current_sum = 0;
    for (let j = 0; j <= i; j++) {
      current_sum = current_sum + arr[j];
    }
    max_sum = Math.max(max_sum, current_sum);
  }
  return max_sum;
}

console.log(getMaxSumPrefix([1, 2, 3, 4]));

/**
 * Есть вложенный цикл - сумма предыдущих элементов вызывается на каждом элементе массива.
 * Итоговая сложность алгоритма в текущей реализации O(n^2).
 */

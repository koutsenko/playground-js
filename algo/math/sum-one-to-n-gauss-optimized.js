/**
 * Вычисление суммы чисел от 1 до n используя формулу Гаусса.
 * Формула: n * (n + 1) / 2
 * 
 * @param {number} n - Верхняя граница суммы.
 * @returns {number} - Сумма чисел от 1 до n.
 * 
 * @complexity
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * 
 * @example
 * sum(5); // 15
 */
const sum = n => (n * (n + 1)) / 2;

console.log(sum(5));

/**
 * Вычисление суммы чисел от 1 до n.
 * 
 * @param {number} n - Верхняя граница суммы.
 * @returns {number} - Сумма чисел от 1 до n.
 * 
 * @complexity
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * @example
 * sum(5); // 15
 */
const sum = (n) => {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    return s;
};

console.log(sum(5));

/**
 * In-place переворот строки заданной в виде массива.
 * Условие см. https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/879/
 *
 * Модификация строки через своп символов попарно, начиная с обоих краев.
 */
module.exports = function reverseString(s) {
  const pairsCount = Math.ceil(s.length / 2);

  let tempChar;
  for (let i = 0; i < pairsCount; i++) {
    const leftIndex = i;
    const rightIndex = s.length - 1 - i;

    tempChar = s[leftIndex];
    s[leftIndex] = s[rightIndex];
    s[rightIndex] = tempChar;
  }
};

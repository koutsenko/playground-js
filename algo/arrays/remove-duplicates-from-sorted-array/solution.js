/**
 * In-place замена дубликатов в неубывающем массиве.
 * Условие см. https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
 *
 * Сборка нового массива без дубликатов прямо в память занимаемую исходным массивом.
 * Исходный массив меняется - в итоге состоит из нового "правильного" подмассива + остатка старого.
 * Функция вернет длину нового правильного подмассива.
 */
module.exports = function removeDuplicates(nums) {
  let length = 1;
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] !== nums[index - 1]) {
      nums[length++] = nums[index];
    }
  }
  return length;
};

// Старый вариант, удаляет дубликаты физически, меняя длину массива. Требует вызова splice.
// function removeDuplicates(nums) {
//   let isCollecting = false;
//   let collectingCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i + 1] === nums[i]) {
//       isCollecting = true;
//       collectingCount++;
//     } else if (isCollecting) {
//       nums.splice(i - collectingCount, collectingCount);
//       i = i - collectingCount;
//       isCollecting = false;
//       collectingCount = 0;
//     }
//   }

//   return nums.length;
// }

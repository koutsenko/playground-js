/**
 * Найти максимальное число идущих подряд одинаковых символов в строке.
 */


/**
 * Вариант 1 - время работы функции O(N).
 * Несмотря на наличие вложенного цикла, время линейное даже в худшем случае.
 * Т.к. во вложенном цикле происходит увеличение nextLetterIndex и оно не может стать больше чем N. 
 */
const maxConsecutiveElements1 = (arr) => {
  let result = 0;
  let currentLetterIndex = 0;

  while(currentLetterIndex < arr.length) {
    let nextLetterIndex = currentLetterIndex;
    while (nextLetterIndex < arr.length && arr[currentLetterIndex] === arr[nextLetterIndex]) {
      nextLetterIndex++;
    }
    result = Math.max(result, nextLetterIndex - currentLetterIndex);
    currentLetterIndex = nextLetterIndex;
  }
 
  return result;
}

/**
 * Вариант 2 - время работы функции O(N).
 * 
 * У getNextDifferentLetterIndex t работы O(N) 
 * в худшем для нее случае (строка одинаковых символов) 
 * 
 * У родительского контекста t работы O(N)
 * в худшем для нее случае (случайная строка)
 * 
 * Итого для maxConsecutiveElements2 t работы O(N).
 * У основного контекста и у вложенной ф-ции разные худшие случаи.
 * Они не могут произойти одновременно.
 * Поэтому O(N^2) недостижимая сложность.
 */
const maxConsecutiveElements2 = (arr) => {
  const getNextDifferentLetterIndex = (arr, currentLetterIndex) => {
    let nextLetterIndex = currentLetterIndex;
    while (nextLetterIndex < arr.length && arr[currentLetterIndex] === arr[nextLetterIndex]) {
      nextLetterIndex++;
    }
    return nextLetterIndex;
  }

  let result = 0;
  let currentLetterIndex = 0;

  while(currentLetterIndex < arr.length) {
    let nextLetterIndex = getNextDifferentLetterIndex(arr, currentLetterIndex);
    result = Math.max(result, nextLetterIndex - currentLetterIndex);
    currentLetterIndex = nextLetterIndex;
  }

  return result;
}

console.log(maxConsecutiveElements1([1, 1, 2, 2, 2, 0, -1, -1, -1, -1, 5, 5]));
console.log(maxConsecutiveElements2([1, 1, 2, 2, 2, 0, -1, -1, -1, -1, 5, 5]));

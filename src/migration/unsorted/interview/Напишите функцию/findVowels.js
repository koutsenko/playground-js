/**
 * Нужно написать функцию подсчета количества гласных в строке.
 */

function findVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let count = 0;
  for (let char of str.toLowerCase()) {
    vowels.includes(char) && count++;
  }
  return count;
}

function findVowels2(str) {
  const matches = str.match(/[aeiouy]/gi);
  return matches ? matches.length : 0;
}

console.log(findVowels('aaAaa'));                 // 5
console.log(findVowels2('aaAaa'));                // 5
console.log(findVowels('3789iufdhhfwuieroad'));   // 7
console.log(findVowels2('3789iufdhhfwuieroad'));  // 7

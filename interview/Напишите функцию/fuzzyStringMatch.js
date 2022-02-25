/**
 * Функция проверяет, является ли первая строка подпоследовательностью второй
 * (нечеткий поиск — fuzzysearch или approximate string matching).
 *  
 * Нужно реализовать функцию с использованием только одного прохода 
 * по символам строки, без использования регулярных выражений.
 */

function fuzzysearch(needle, stack) {
  let match = false;

  let indexOfCurrentNeedleChar = 0;
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === needle[indexOfCurrentNeedleChar]) {
      if (indexOfCurrentNeedleChar === needle.length - 1) {
        match = true;
        break;
      }
      indexOfCurrentNeedleChar++;
    }
  }

  return match;
}

console.log(fuzzysearch('car', 'cartwheel'));        // true
console.log(fuzzysearch('cwhl', 'cartwheel'));       // true
console.log(fuzzysearch('cwhee', 'cartwheel'));      // true
console.log(fuzzysearch('cartwheel', 'cartwheel'));  // true
console.log(fuzzysearch('cwheeel', 'cartwheel'));    // false
console.log(fuzzysearch('lw', 'cartwheel'));         // false

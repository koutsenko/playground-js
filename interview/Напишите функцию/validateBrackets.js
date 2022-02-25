/**
 * Дана строка, состоящая из букв латинского алфавита, цифр и скобок  {([])}.
 * Необходимо проверить, что скобки в строке сбалансированы — на каждую
 * открывающую скобку приходится закрывающая, и скобочные группы не пересекаются.
 * Напишите функцию, которая принимает такую строку и возвращает true,
 * если скобки сбалансированы, и false, если не сбалансированы.
 */

function isValid(str) {
  const bracketsMap = {
    '}': '{',
    ']': '[',
    ')': '('
  };

  const stack = [];

  let result = false;
  let error = false;

  for (let i = 0; i < str.length; i++) {
    if (['(', '[', '{'].includes(str[i])) {
      stack.push(str[i]);
    } else if ([')', ']', '}'].includes(str[i])) {
      if (stack.length === 0 || bracketsMap[str[i]] !== stack[stack.length - 1]) {
        error = true;
        break;
      } else {
        stack.pop();
      }
    }
  }

  result = !error && stack.length === 0;

  return result;
}

console.log(isValid("(foo)"));      // true
console.log(isValid("(f[o]{o})"));  // true
console.log(isValid("[(){}()()]")); // true
console.log(isValid("(foo"));       // false — нет закрывающей
console.log(isValid("{f[o}o]"));    // false — скобки пересекаются

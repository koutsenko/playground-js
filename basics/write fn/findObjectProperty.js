/**
 * Нужно написать функцию get. На вход функция принимает объект и путь до поля объекта.
 * Путь - это строка, разделенная точкой. Функция должна вернуть соответствующее поле объекта.
 * Запрашиваемого поля в объекте может не быть.
 */

function get(obj, path) {
  let result;

  if (typeof obj === 'object' && obj !== null) {
    let broken = false;
    let pointer = obj;
    for (let token of path.split('.')) {
      if (pointer[token] === undefined) {
        broken = true;
        break;
      }
  
      pointer = pointer[token];
    }
    if (!broken) {
      result = pointer;
    }
  }

  return result;
}

const obj = {
  a: {
    b: {
      c: 'd'
    },
    e: 'f'
  }
};

console.log(get(obj, 'a.b'));   // { c : 'd' }
console.log(get(obj, 'a.b.c')); // 'd'
console.log(get(obj, 'a.e'));   // 'f'
console.log(get(obj, 'a.x.e')); // undefined

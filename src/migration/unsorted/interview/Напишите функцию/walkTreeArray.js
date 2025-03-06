
/**
 * Объект похожий на дерево, но вместо left-right узлов - массив узлов.
 */
 let object1 = {
  value: "-",
  children: [{
      value: '+',
      children: [{
          value: 'a',
      }, {
          value: '*',
          children: [{
              value: 'b',
          }, {
              value: 'c',
          }],
      }],
  }, {
      value: '/',
      children: [{
          value: 'd',
      }, {
          value: 'e',
      }]
  }],
};

/**
* Рекурсивный обход объекта.
* Функция вызывает сама себя.
*/
let dfsObjRec = (nodes, acc = []) => {
  if (!nodes.length) {
      nodes = [nodes];
  }
  for (let node of nodes) {
      acc.push(node.value);
      if (node.children) {
          dfsObjRec(node.children, acc);
      }
  }
  return acc;
}
console.log(dfsObjRec(object1));

/**
* Нерекурсивный обход объекта.
* Все в while цикле с проверкой длины стека.
* Сам стек модифицируется внутри этого цикла!
*/
let dfsObjNonRec = node => {
  let result = [];
  let stack = [node];
  while (stack.length) {
      let current = stack.pop();
      result.push(current.value);
      if (current.children) {
          stack.push(...current.children);
      }
  }

  return result;
}
console.log(dfsObjNonRec(object1));

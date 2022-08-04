/**
 * DFS - depth first search.
 */

/**
 * Двоичное дерево.
 */
let tree1 = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
};

/**
 * Рекурсивный обход дерева.
 * Функция вызывает сама себя.
 */
let dfsTreeRec = (node, acc = []) => {
    if (node) {
        acc.push(node.value);
        dfsTreeRec(node.left, acc);
        dfsTreeRec(node.right, acc);
    }
    return acc;
}
console.log(dfsTreeRec(tree1));

/**
 * Нерекурсивный обход дерева.
 * Все в while цикле с проверкой длины стека.
 * Сам стек модифицируется внутри этого цикла!
 */
let dfsTreeNonRec = (nodes) => {
    let result = [];
    let stack = [nodes];
    while (stack.length) {
        let node = stack.pop();
        result.push(node.value);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    return result;
}
console.log(dfsTreeNonRec(tree1));

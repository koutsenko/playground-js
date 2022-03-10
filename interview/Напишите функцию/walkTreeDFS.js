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

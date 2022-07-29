console.log('apple');

setTimeout(() => console.log('pear'), 0);

Promise.resolve('melon').then(res => console.log(res));

new Promise((resolve, reject) => {
    console.log('orange');
    resolve('pineapple');
}).then(res => console.log(res));

console.log('lime');

/**
 * 1 apple
 * 2 orange
 * 3 lime
 * 4 melon
 * 5 pineapple
 * 6 pear
 */

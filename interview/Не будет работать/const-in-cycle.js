/**
 * При запуске выведет "before", "inside 0" и дальше упадет с рантайм ошибкой:
 * TypeError: Assignment to constant variable
 * 
 * То есть код будет работать ровно до попытки изменить значение переменной a.
 */

console.log('before');
for (const a = 0; a < 10; a++) {
  console.log("inside", a);
}
console.log('after');

var moment = require('moment');
var date = moment("20220315").add(89, 'days');

// Выведет Moment<2022-06-12T00:00:00+03:00>
console.log(date);

// Выведет object в обоих случаях
console.log(typeof(date), typeof(date.__proto__));

// Выведет несколько как бы приватных свойств (с префиксом _) 
console.log(Object.keys(date));

// Выведет множество методов прототипа
console.log(Object.keys(date.__proto__));

// Вызов метода прототипа через прототип - в данном случае не работает т.к. нет this
// Конкретно здесь выдаст TypeError: Cannot read properties of undefined (reading 'getTime')
console.log(date.__proto__.month());

// Вызов метода прототипа из объекта - работает
console.log(date.month());

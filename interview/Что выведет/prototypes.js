String.prototype.say = () => 'Say my name!';
const name = 'waf!';

// Ничего не выведет, т.к. метод просто возвращает строку
name.say();

// Выведет "Say my name!"
console.log(name.say());

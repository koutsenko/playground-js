// Пример того, что в объектах this в том же контексте что и сама функция log.  

const myObject = {
  name: "Ivan",
  age: 20,
  log: function() {
    console.log(this.name);
  }
};
const wrapperObject = {
  name: "Egor",
  inner: myObject
};

myObject.log();             // "Ivan"
wrapperObject.inner.log();  // "Ivan"
myObject.name = undefined;
myObject.log();             // undefined 
wrapperObject.inner.log();  // undefined

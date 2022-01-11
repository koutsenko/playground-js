// Макротаски:
// - <script src>
// - event handlers
// - setTimeout

// Микротаски
// - then/catch/finally в промисах

// Суть: 
// - идлим
// - выполняем все микротаски из очереди
// - выполняем макротаску
// - выполняем все микротаски из очереди
// - выполняем макротаску
// - ?

// Что выведет код?

var a = 5;
// Макротаска
setTimeout(function timeout() {
  console.log(4, a);  // №4
  a = 10;
}, 0);

// Промис выполняем и ресолвим сразу
var p = new Promise(function(resolve, reject) {
  console.log(1, a);  // №1
  a = 25;
  resolve();
});

// Микротаска
p.then(function() {
  console.log(3, a);  // №3
  a = 15;
});

console.log(2, a);    // №2

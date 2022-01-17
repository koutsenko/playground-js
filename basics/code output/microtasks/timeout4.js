Promise.resolve(1)
     .then(x => x + 1)                            // Изменился x = 2
     .then(x => { throw x })                      // Throw x
     .then(x => console.log(x))                   // НЕ ВЫПОЛНЯЕТСЯ
     .catch(err => { console.log(err); return; }) // Печать x
     .then(x => Promise.resolve(1))               // Генерим 1
     .catch(err => console.log(err))              // НЕ ВЫПОЛНЯЕТСЯ
     .then(x => console.log(x));                  // Печать x = 1

// Выведет 2, 1

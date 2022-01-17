let num = 1;
		
if (num == 1) {
	var result = 'верно';
	let result2 = 'верно';
} else {
	var result = 'неверно';
  let result2 = 'неверно';
}

console.log(result);
// console.log(result2);

/**
 * Выведет ReferenceError: result2 is not defined, т.к. видимость let\const ограничена блоком {}. 
 * Если закомментировать печать result2, то выведет "верно", т.е. переменная поднимется, присвоение отработает. 
 */

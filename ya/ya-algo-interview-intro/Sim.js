// Либо число больше одного и меньше другого (или наоборот) - число медиана
// Либо второе число больше одного и меньше другого (или наоборот) - второе медиана
// Иначе третье медиана.
const getMed(a, b, c) {
    return (a >= b && a <= c) || (a <= b && a >= c) ? a : 
          ((b >= a && b <= c) || (b <= a && b >= c) ? b : c);
}


// Задачи на строки (простые варианты)
// СТРОКИ В JS НЕМУТАБЕЛЬНЫ!

// Поменять слова местами
```
const reverse = (str) => str.split(" ").reverse().join(" ");
```

// Реализация split 
const split = (str) => {
	const words = [];
	let index = 0;
	for (const char of str) {
	  if (char === ' ') {
		words.push('')
	    index++;
	  } else {
		words[index] = words[index] + char;
	  }
	}
	return words;
}

// reverse - создаем новую строку и пишем в нее символы с конца исходной.
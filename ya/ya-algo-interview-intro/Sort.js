const bubbleSortConcept1 = (arr) => { 
  for (let j = arr.length - 1; j > 0; j--) { 
    for (let i = 0; i < j; i++) { 
      if (arr[i] > arr[i + 1]) { 
        let temp = arr[i]; 
        arr[i] = arr[i + 1]; 
        arr[i + 1] = temp; 
      } 
    } 
  }
  return arr;
}

const bubbleSortConcept2 = (arr) => {
  do {
    swapped = false;
    console.log(arr);
    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        // Save the value to a variable so we don't lose it
        let temp = item;
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    })
  } while (swapped);
  return arr;
}

// bubbleSortConcept2([5, 3, 8, 2, 1, 4]);

// console.log(bubbleSortConcept1([5, 3, 8, 2, 1, 4]));
// console.log(bubbleSortConcept2([5, 3, 8, 2, 1, 4]));


// Тут я не понимаю почему нет выхода за границы массива
// Посмотрел. даже в use strict можно запросить следующий элемент.

"use strict";
const test = (arr) => {
    arr.forEach((item, index) => {
      console.log(item, arr[index+1])
    })
  }

// test([1,2,3,4,5]);

// console.log(5 > undefined) // false
// console.log(5 > null) // true

// console.log(+undefined); // NaN
// console.log(+null); // 0

// Виды сортировки
// - по возрастанию (ascending )= от наименьшего до наибольшего
// - по убыванию (descending) = от наибольшего до наименьшего

// По-умолчанию arr.sort сортирует ПО ВОЗРАСТАНИЮ.
 
const square = {
  side: 5,
  area() {
      return this.side * this.side;
  },
  area2: function() {
      return this.side * this.side;
  },
  perimeter: () => 4 * this.side,
};


console.log(square.area());
console.log(square.area2());
console.log(square.perimeter());
const tryToFixPerimeter = square.perimeter.bind(square);
console.log(tryToFixPerimeter());

/**
 * Выведет 25, 25, NaN.
 * 
 * Что происходит:
 * - стрелочная функция имеет указатель this из родительской функции 
 * - стрелочная функция всегда анонимная - попытки изменить this через bind/apply не помогут
 */

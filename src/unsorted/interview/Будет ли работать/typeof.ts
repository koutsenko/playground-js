const a = 5;
let b = 3;

const log = (c: typeof a) => {
  console.log(c);
};

// Error TS2345: Argument of type 'number' is not assignable to parameter of type '5'.
// TSC выдаст ошибку , но соберет js файл, при запуске выведет "3".
// log(b);

let value = 2;
 
function showValue() {
     console.log(`showValue ${value}`);
}
 
function wrapper() {
     console.log(`wrapper ${value}`);
     
     let value = 3;
     showValue();
}
 
/**
 * Выведет ReferenceError: Cannot access 'value' before initialization.
 * Что происходит: движок видит что переменную объявляют (еще раз) внутри функции.
 * То есть он ожидает обратиться к локальной переменной value, но она еще не определена.
 */
wrapper();

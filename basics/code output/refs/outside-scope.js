let a = 5;
function print() {
    console.log(a);
}

{
    let a = 3;
    print();
}

/**
 * Выведет 5, потому что:
 * 1. Движок js парсит тело функции во время ее определения.
 * 2. Переменная a не определена в аргументах и теле print. Внешние значения захватываются при определении
 */
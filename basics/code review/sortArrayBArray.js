const sortArrayBArray = (first, second) => {
  let newArr = [];
  for (let k = 0; k < second.length; k++) {
    for (let i = 0; i < first.length; i++) {
      if (first[i].code === second[k]) {
        newArr.push(first[i]);
        break;
      }
    }
  }
  return newArr;
}

const a = [{ code: 0 }, { code: 1 }, { code: 2 }, { code: 3 }, { code: 4 }];
const b = [0, 3, 4];

console.log(sortArrayBArray(a, b));

/**
 * Что выведет и почему.
 *
 * Ответ [ { code: 0 }, { code: 3 }, { code: 4 } ].
 * Функция вернет новый массив со ссылками на найденные объекты из первого массива.
 * Поиск по первому соответствию code и значения во втором массиве.
 */


/**
 * Сделайте ревью кода.
 *
 * 0. Название функции не соответствует тому что она делает, она скорее что-то ищет, чем сортирует.
 * 1. В новый массив следует класть копию элемента newArr.push({...first[i]}) во избежание мутаций исходного массива.
 * 2. Код можно записать короче через Array.prototype.reduce():
 *
 * const sortArrayBArray = (first, second) => second.reduce((acc, cur) => {
 *   const found = first.find(item => item.code === cur);
 *   return found === undefined ? acc : [...acc, {...found}];
 * }, []);
 *
 * 3. На больших данных код неоптимальный, мы каждый раз заново пробегаемся по массиву first.
 * Есть смысл пройтись по нему один раз, собрать индексы для каждого еще не записанного значения code.
 * Далее с помощью индекса извлечь элементы в соответствии со вторым массивом.
 */

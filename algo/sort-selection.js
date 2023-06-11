/**
 * СОРТИРОВКА ВЫБОРОМ / SELECTION SORT
 *
 * Нахождение мин (или макс) элемента в неотсортированной части массива.
 *
 * Для массива в 5 элементов надо сделать 4+3+2+1 сравнений.
 * Для массива в 3 элемента надо сделать 2+1 сравнений.
 * Так как сумма чисел 1 до N равна (N/2)(N+1), для 1 до N-1 равна (N/2)(N+1)-(N-1).
 *
 * Вычислительная сложность (асимптотика): O(N^2) в лучшем, среднем и худшем случаях.
 * По памяти: O(1).
 *
 * Подробнее см. https://habr.com/ru/post/335920/
 */
function selection_sort(arr, direction = "asc") {
  let temp;
  for (let start = 0; start < arr.length; start++) {
    let index = start;
    for (let current = start + 1; current < arr.length; current++) {
      if (
        (direction === "asc" && arr[current] < arr[index]) ||
        (direction === "desc" && arr[current] > arr[index])
      ) {
        index = current;
      }
    }
    if (index !== start) {
      temp = arr[start];
      arr[start] = arr[index];
      arr[index] = temp;
    }
  }
  console.log(JSON.stringify(arr));
  return arr;
}

selection_sort([1, 3, 4, 5, 6, 0, 0, -10, 100], "desc");

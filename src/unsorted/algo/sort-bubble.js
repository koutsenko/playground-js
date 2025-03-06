/**
 * СОРТИРОВКА ПУЗЫРЬКОМ / BUBBLE SORT
 *
 * Проталкивание вперед самых больших (или малых) элементов в попарном сравнении.
 *
 * Асимптотика в худшем и среднем случае – O(n2), в лучшем случае – O(n).
 *
 * Подробнее см. https://habr.com/ru/post/335920/
 */
function bubble_sort(arr, direction = "asc") {
  let temp;
  for (let end = arr.length - 1; end > 0; end--) {
    for (let current = 0; current < end; current++) {
      if (
        (direction === "asc" && arr[current] < arr[current + 1]) ||
        (direction === "desc" && arr[current] > arr[current + 1])
      ) {
        temp = arr[current];
        arr[current] = arr[current + 1];
        arr[current + 1] = temp;
      }
    }
  }
  console.log(JSON.stringify(arr));
  return arr;
}

bubble_sort([1, 3, 4, 5, 6, 0, 0, -10, 100], "desc");

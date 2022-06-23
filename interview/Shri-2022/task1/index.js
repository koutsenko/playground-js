/**
 * Задача 1. https://contest.yandex.ru/contest/35504/problems/?nc=yC0bv0xg
 *
 * A. Объявление.  
 * Задача написать JavaScript-функцию, которая разместит блоки с текстом как газетные колонки.
 * Ответ не приняли, почему - неизвестно.
 */

/**
 * Размещение блока с текстом как газетных колонок.
 * 
 * @param HTMLDivElement rootNode Элемент в котором находятся объявления. 
 * @param number columnCount Количество колонок. 
 * @param elementGap Расстояние между колонками, а также элементами по-вертикали.
 */
 function renderWaterfall(rootNode, columnCount, elementGap) {
  // Объявляем корневую ноду новой точкой отсчета.
  rootNode.style.position = 'relative';

  const items = rootNode.getElementsByClassName('el');
  const totalWidth = rootNode.getBoundingClientRect().width;
  const columnWidth = (totalWidth + elementGap) / columnCount - elementGap;
  const rowCount = items.length % columnCount === 0 ? items.length / columnCount : Math.floor(items.length / columnCount) + 1;

  // Применяем новую ширину к каждому объявлению.
  for (let j = 0; j < rowCount; j++) {
    for (let i = 0; i < columnCount; i++) {
      let index = i + j * columnCount;
      if (index < items.length) {
        items[index].style.width = columnWidth + 'px';
      }
    }
  }

  // Считываем изменившиеся высоты и расставляем объявления.
  const colOffsets = new Array(columnCount).fill(0);
  for (let j = 0; j < rowCount; j++) {
    for (let i = 0; i < columnCount; i++) {
      let index = i + j * columnCount;
      if (index < items.length) {
        // Поиск колонки с наименьшей на данный момент высотой
        let minIndex = 0;
        for (let k = 0; k < columnCount; k++) {
          if (colOffsets[k] < colOffsets[minIndex]) {
            minIndex = k;
          }
        }
        // Размещение объявления в наименьшей колонке
        let itemHeight = items[index].getBoundingClientRect().height;
        items[index].style.position = 'absolute';
        items[index].style.left = minIndex * (columnWidth + elementGap) + 'px';
        items[index].style.top = colOffsets[minIndex] + 'px';
        colOffsets[minIndex] += itemHeight + elementGap;
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  const root = document.getElementsByClassName('root')[0];
  renderWaterfall(root, 5, 10);
});

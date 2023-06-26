/**
 * Классический пример на собесах про this внутри таймаутов.
 */
const car = {
  name: "Tesla",
  startEngine() {
    console.log(`The ${this.name} engine is starting...`);
  },
  delayedStart() {
    // Ошибка, выведет "The undefined engine is starting".
    setTimeout(this.startEngine, 1000);

    // Решение 1: стрелочная функция (лексически привязана к this).
    setTimeout(() => this.startEngine(), 1000);

    // Решение 2: использовать bind.
    setTimeout(this.startEngine.bind(this), 1000);
  },
};

car.delayedStart();

/**
 * Классический пример на собесах про вложенные объекты.
 */
const truck = { car };

// Выведет все то же самое, метод delayedStart выполняется в контексте объекта car.
truck.car.delayedStart();

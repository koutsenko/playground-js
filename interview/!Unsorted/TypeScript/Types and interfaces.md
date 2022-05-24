# Типы и интерфейсы
2021-06-03 14:47:42
            
---
interfaces
используются для более традиционных объектно-ориентированных целей, в которых мы определяем форму объекта, а затем используем его в качестве контракта для параметров функции или для реализации класса.


*From <<https://frontend-stuff.com/blog/types-vs-interfaces/>>*
interface IAnimal {
age: number;
eat(): void;
speak(): string;
}


*From <<https://frontend-stuff.com/blog/types-vs-interfaces/>>*






В большинстве случаев псевдонимы
types
в TypeScript используются для создания псевдонимов более сложного типа, такого как объединение других типов, для повторного использования имени.
type Pet = IDog | ICat;


*From <<https://frontend-stuff.com/blog/types-vs-interfaces/>>*









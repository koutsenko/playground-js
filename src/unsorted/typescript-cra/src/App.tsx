import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Пример функции, где четко заданы типы у параметров и у результата.
 */
function add(left: number, right: number): number {
  return left + right;
}

/**
 * Тип void
 */
function print(value: string): void {
  console.log(value);
}

/**
 * Декларируем перечисление.
 */
enum Color {Red, Green, Blue};

function App() {
  // Проконсолим несколько базовых ts типов
  let bool: boolean = false;
  let decimal: number = 6;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;
  let name: string = 'bob';
  console.log('Print typed variables:', bool, decimal, hex, binary, octal, name);
  
  // Два способа указать, что массив заданного типа
  let list: number[] = [0, 1, 2, 3, 0x23];
  let list2: Array<number> = [0, 1, 2, 3, 0x23];
  console.log('Arrays: ', list, list2);

  // Тип any
  let xz: any = 'Вообще пофиг';
  console.log('Any: ', xz);

  // Вызов typed-функции
  let res: number = add(1, 2);
  console.log('Typed fn output:', res);

  // Tuple
  let x: [string, number, boolean];
  x = ['hello', 5, true];
  console.log('Tuple:', x);

  // Enum, можно получить как строку, так и число
  let c1: Color = Color.Blue;
  let c2: String = Color[2];
  console.log('Enum value:', c1, c2);

  // Void (присвоить получится только null и undefined, так что для переменных бесполезно)
  print('data');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

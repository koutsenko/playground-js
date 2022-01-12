/**
 * Интерфейс с 3 обязательными полями-строками.
 */
export interface MyInterface0 {
  'MyEntry1': string;
  'MyEntry2': string;
  'MyEntry3': string;
}

/**
 * Интерфейс с любыми полями-строками.
 */
export interface MyInterface1 extends Record<string, string> {

}

/**
 * Интерфейс с 3 обязательными и любыми другими полями-строками. 
 */
export interface MyInterface2 extends Record<string, string> {
  'MyEntry1': string;
  'MyEntry2': string;
  'MyEntry3': string;
}

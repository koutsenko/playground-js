import * as React from 'react';

import { MyInterface0, MyInterface1, MyInterface2 } from './interfaces';

/**
 * Рендер данных, типизированных через интерфейсы.
 */
const InterfacesDemo = () => {
  const data0: MyInterface0 = {
    MyEntry1: "something",
    MyEntry2: "and some else",
    MyEntry3: "some string.."
    // NotExpected0: "0",
    // NotExpected1: 0,
  };
  const data1: MyInterface1 = {
    NotExpected0: "0",
    // NotExpected1: 0,
  };
  const data2: MyInterface2 = {
    MyEntry1: "my pretty string",
    MyEntry2: "another string",
    MyEntry3: "just a string",
    NotExpected0: "0",
    // NotExpected1: 0,
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <h1>interfaces</h1>
      {JSON.stringify(data0)}
      <br/>
      {JSON.stringify(data1)}
      <br/>
      {JSON.stringify(data2)}
    </div>
  );
}

export default InterfacesDemo;

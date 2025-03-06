import React, { useEffect } from 'react';

// Пример передачи render-функции в качестве пропса

const DataProvider = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadData = async () => {
      let result = null;
      try {
        result = (await fetch('https://www.google.com')).json();
      } catch (error) {
        console.error('Data load error: ', error);
      }
      return result;
    }

    setData(loadData());
  }, []);

  return props.children(data);
};

// Вариант с передачей render функции как props.children, т.е. даже не внутри jsx тэга.
const Main = () => {
  return (
    <DataProvider>
      {(data) => {
        return (
          <div>{data.name}</div>
        );
      }}
    </DataProvider>
  );
}; 
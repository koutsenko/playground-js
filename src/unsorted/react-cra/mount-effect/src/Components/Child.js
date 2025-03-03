import {useEffect} from "react";

export default function Child(props) {
  useEffect(() => {
    // Проверка сработает ли эффект на маунте?
    // Ответ:
    // - если значение изначально было, то да
    // - если изначально передали props.count = undefined, то ТОЖЕ ДА
    console.log(props.count);
  }, [props.count]);

  useEffect(() => {
    // Этот эффект тоже сработает, на несуществующем пропсе! Один раз на маунте
    console.log("hi");
  }, [props.unknown]);

  return (
    <div>
      <h1>Всего сообщений {props.count}</h1>
    </div>
  );
}

# Разное
2021-03-29 18:19:28
            
---


React + TS на базе CRA
Официальный сайт CRA, раздел Typescript: <https://create-react-app.dev/docs/adding-typescript/>
Установка с нуля, судя по package.json установится версия 3.7.5,

<table><colgroup><col style="width: 100%" /></colgroup><thead><tr class="header"><th><p>mkdir ./ts &amp;&amp; cd ts</p><p>npx create-react-app . --template typescript</p></th></tr></thead><tbody></tbody></table>
Добавить в уже имеющийся CRA проект - команды ниже, затем перезапустить dev server
<table><colgroup><col style="width: 100%" /></colgroup><thead><tr class="header"><th><p>npm install --save typescript @types/node @types/react @types/react-dom @types/jest</p><p>mv src/index.js src/index.tsx</p></th></tr></thead><tbody></tbody></table>
Стартуем npm start, <http://localhost:3000/> ,в коде я не вижу нового, все тот же js... Единственное, есть tsconfig.json, вместо привычного jsconfig.json
Ладно, создаем песочницу на гитхабе (<https://github.com/koutsenko/ts-playground>), пушим туда Initial commit от CRA и начинаем учить.
Теория TS
Читаем официальное руководство <http://typescript-lang.ru/docs/>
-   базовые типы

    -   если указать их неверное в рамках входа/выхода функции, то ts выдает ошибку компиляции
дошел до type assertions...




Композиция типов данных


type
TProps
=
IOwnProps
&
IStateProps
&
IDispatchProps
&
IAnalyticsFormProps;
Итоговый тип будет сочетать свойства всех перечисленных типов.


interface TProps extends IOwnProps;
Итоговый тип так же будет сочетать (расширять) свойства, но если попадутся одинаковые ключи - будет ошибка TS
Папка @types


Появилась в TS проекте, когда через webpack в приложение была проброшена переменнная MOCKED_API и typescript стал выдавать ошибку
| Cannot find name 'MOCKED_API'.ts(2304) |
|------------------------------------------|


Пришлось создать файл src/@types/constants.d.ts с содержимым
| declare const MOCKED_API: boolean; |
|------------------------------------|





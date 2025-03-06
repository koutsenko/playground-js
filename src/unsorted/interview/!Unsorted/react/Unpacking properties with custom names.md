# Распаковка пропертей под новыми именами
2021-01-31 21:28:01
            
---
**Проверка**
1) Создать проект npm init
2) Установить create-react-app
3) Передать в <App> горку пропертей prop1, prop2, ...
4) Извлечь ее под другими именами
<table><colgroup><col style="width: 100%" /></colgroup><thead><tr class="header"><th><p>componentWillReceiveProps(nextProps) {</p><p>

const {</p><p>



prop1: newProp1,</p><p>



prop2: newProp2</p><p>

} = nextProps;</p><p>

console.log(111, newProp1, newProp2);</p><p>}</p></th></tr></thead><tbody></tbody></table>





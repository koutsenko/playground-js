# Проверка на null и undefined
2020-12-17 15:22:51
            
---


1.  Самый дубовый вариант проверки


| const check = foo => foo === undefined || foo === null; |
|-----------------------------------------------------------|


2.  Вариант с лодашем (видел в коде проекта, он странный)


<table><colgroup><col style="width: 100%" /></colgroup><thead><tr class="header"><th><p>import {isNull, isUndefined} from 'lodash';</p><p>
</p><p>const check = foo =&gt; isNull(undefined) &amp;&amp; isUndefined(null);</p></th></tr></thead><tbody></tbody></table>


3.  Вариант с массивом, удобен для добавления проверок на false, 0 и т.п.


| const check = foo => [null, undefined].includes(foo); |
|---------------------------------------------------------|


4.  Неправильный вариант (ложное срабатывание на false или 0)
> 

| const check = foo => !!foo; |
|-----------------------------|


5.  **Современный вариант (<https://learn.javascript.ru/nullish-coalescing-operator>)**


| **const check = foo => !foo ?? false;** |
|-----------------------------------------|




Но чаще всего это используется для задания значения по-умолчанию для переменной.


<table><colgroup><col style="width: 100%" /></colgroup><thead><tr class="header"><th><p>let firstName = null;</p><p>let lastName = null;</p><p>let nickName = "Суперкодер";</p><p>
</p><p>// показывает первое определённое значение:</p><p>alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер</p><p>
</p><p>// показывает первое истинное значение:</p><p>alert(firstName || lastName || nickName || "Аноним"); // Суперкодер</p></th></tr></thead><tbody></tbody></table>


Первый вариант более корректный, т.к. не надо помнить о типе переменной.





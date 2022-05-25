﻿# Кодинг - refs в реакте
2021-01-31 21:27:22
            
---
В функциональных компонентах const ref = useRef(); ссылка ref.current это аналог this.
Нет никаких проблем с передачей ref в дочерние компоненты до тех пор пока ты передаешь свойства отличие от "ref", например itemRef, parentRef и т.п.
Нативный ref вешать можно только на html элементы.
1. Ну а если ты юзаешь <MyComponent ref={blalba}>, то тут и начинаются пляски.
const MyComponent
 = React.forwardRef((props, ref) => { ... код компонента и передача ref как пропса с другим названием });
2. Также если надо чтобы ref всегда был чему-то равен, юзать ensuredForwardRef из react-use.




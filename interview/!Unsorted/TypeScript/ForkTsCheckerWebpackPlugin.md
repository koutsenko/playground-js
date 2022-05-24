# ForkTsCheckerWebpackPlugin
2021-01-31 21:23:55
            
---
**ForkTsCheckerWebpackPlugin**
Я сделал бойлерплейт проект profile-db, где подключил typescript и по аналогии с рабочим кодом использовал [ForkTsCheckerWebpackPlugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#readme).
В webpack.config.js видно, что **во время сборки/пересборки** он вместо ts-loader ищет ошибки, сам ts-loader занимается чисто транспилингом ts в js. Так якобы быстрее.
Что до самого vscode, он **во время редактирования кода** ищет ошибки по-своему, используется либо системный версия ts, либо project-specific (если указать в настройках).
Но по-хорошему надо глянуть сюда - <https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/tree/master/examples> и перенастроить всё?


TLDR


Принял решение удалить его. Якобы он ускоряет линтинг и сборку, но за счет кучи конфигов в разных местах, которые в итоге непонятно работают или нет.





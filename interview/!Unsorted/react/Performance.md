> Но опять же это для старых компонентов на классах, в хуках надо использовать (инфа 2019 года)
-   избежать ререндер компонента = React.memo
-   избежать пересчета стейта компонента = useMemo
-   избежать пересчета инфы из редакса = createSelector из reselect

TODO Найти статью на хабре про useCallback
Возможно стоит заморочиться тестом перфоманса на синт. примерах (очень тяжелые компоненты)
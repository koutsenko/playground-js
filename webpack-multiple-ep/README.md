### Бойлерплейт MPA - многостраничное React приложение.

Каждая страница реализована через отдельный html файл и js бандл. Уже внутри конкретной страницы можно задействовать react-router для вложенных маршрутов.

**p.s.** в дальнейшем нужно будет помнить про различия маршрутов. Может понадобиться функция-хэлпер для выполнения перехода через history.push или window.location.replace, в зависимости от URL.

Использованные ссылки:

- [webpack, react и babel в 2020](https://www.valentinog.com/blog/babel/)
- [несколько точек входа](https://webpack.js.org/concepts/entry-points/#multi-page-application)
- [несколько html страниц](https://www.ivarprudnikov.com/static-website-multiple-html-pages-using-webpack-plus-github-example/)
- [роутинг в webpack-dev-server](https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback)

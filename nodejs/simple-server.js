/**
 * Простейший сервер на Node.js, запуск: node ./simple-server.js.
 *
 * Отдает сообщение "Hello, World!", проверить можно способами:
 * - открыть в браузере http://localhost:3000
 * - выполнить curl http://localhost:3000
 * - выполнить curl -v http://localhost:3000
 */

/**
 * Импорт с двоеточием (colon) означает импорт core module.
 * Некоторые core модули могут быть импортированы и без него.
 * Поддержка node: импортов в require появилась в v16.0.0, v14.18.0.
 * См. документацию https://nodejs.org/api/modules.html#core-modules.
 */
const http = require("node:http");

/**
 * Можно использовать ES-модули. Но чтобы они заработали, придется на выбор
 * - использовать .mjs расширение
 * - завести package.json и указать "type": "module"
 */
// import { http } from "node:http";

http
  .createServer((_req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello, World!");
  })
  .listen(3000);

/**
 * Наивный сервер. Иллюстрация неверного подхода в работе с I/O:
 * - неконтролируемое потребление памяти;
 * - отсутствие ответа, пока не прочитаем весь файл.
 *
 * См. корректную реализацию в ./server-readfile-stream.js.
 */

const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((_req, res) => {
  fs.readFile("file.md", (_err, data) => {
    res.end(data);
  });
});
server.listen(8000);

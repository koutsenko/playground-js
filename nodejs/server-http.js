/**
 * Чуть более развернутый вариант HTTP-сервера.
 * Выставляет код ответа, заголовки, формирует ответ, завершает ответ.
 * В браузере выведет Hello Node.js Server!
 */

const http = require("node:http");
const port = 3000;

const requestHandler = (_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello Node.js Server!</h1>");
  res.end();
};

const errorHandler = (error) => {
  console.error(error);
};

const server = http.createServer(requestHandler);
server.listen(port, errorHandler);

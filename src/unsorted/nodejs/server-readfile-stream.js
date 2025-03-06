/**
 * Корректная реализация отдачи файла по кусочкам через стримы.
 *
 * См. наивную (некорректную) реализацию в server-readfile-sync.js.
 */

const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((_req, res) => {
  const stream = fs.createReadStream(__dirname + "/file.md");
  stream.pipe(res);
});
server.listen(8000);

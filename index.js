const http = require("http");
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("hello RKM");
  })
  .listen(8000);

console.log("Server is running...");

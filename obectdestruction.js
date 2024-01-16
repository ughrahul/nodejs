const http = require("http");
const library = require("./propercase");
const { properCase } = required("./propercase");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    const updatedMsg = toUppercase("Hi from Server");
    const updatedMsg2 = library.properCase("Hi from Server");
    response.end(updatedMsg + updatedMsg2);
  })
  .listen(8000);
console.log("Server is running...");

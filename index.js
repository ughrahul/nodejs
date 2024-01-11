const http = require("http");
const greeting = require("./library");
const mathLibrary = require("./math");

http
  .createServer((request, response) => {
    greeting.getHello();
    greeting.getNamaste("Rahul");
    greeting.getBonjor();
    const mathAdd = mathLibrary.add(2, 3);
    const mathMulti = mathLibrary.multiply(2, 3);
    const mathSub = mathLibrary.subtract(2, 3);

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("hello RKM");

    console.log("Server is running...");
    console.log("Result of Addition:", mathAdd);
    console.log("Result of Multiplication:", mathMulti);
    console.log("Result of Subtraction:", mathSub);

    response.end();
  })
  .listen(8000);

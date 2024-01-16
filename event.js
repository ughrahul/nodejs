const events = require("events");

//event initalize
const eventEmitter = new events.EventEmitter();

//fn define
const sayHello = () => {
  console.log("I am hello");
};

//assign
eventEmitter.addListener("hello", sayHello);

//call the event
eventEmitter.emit("hello");

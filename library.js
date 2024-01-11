const getHello = () => {
  console.log("Hello from library");
};

const getNamaste = (name) => {
  console.log(`Namaste ${name}`);
};

const getBonjor = () => {
  console.log("Bonjour");
};

module.exports = { getHello, getNamaste, getBonjor };

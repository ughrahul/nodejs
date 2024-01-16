//write a nodejs application to encrypt the password using package called bcryptjs

const bcrypt = require("bcryptjs");

const originalPassword = "mySecurePassword";

bcrypt.hash(originalPassword, 10, (err, hashedPassword) => {
  if (err) return console.error("Error encrypting password:", err.message);
  console.log("Original:", originalPassword, "\nHashed:", hashedPassword);
});

//SIR method
const bcryptjs = require("bcryptjs");

const encryptPw = (string) => {
  return bcryptjs.hashSync(string, 10);
};

const hashedPw = encryptPw("password");

const comparePw = (string, hash) => {
  return bcryptjs.compareSync(string, hash);
};

const isValidPw = comparePw("passwords", hashedPw);
console.log({ isValidPw });

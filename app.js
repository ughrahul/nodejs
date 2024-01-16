//Write the function for conversion of Title to slug
//For eg: "Back-End and Web Development For 2024" => "back-end-and-web-development-trends-for-2024
/*
const slugify = (string) => {
  return string
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
};
const result = slugify("Back-End and Web Development For 2024");
console.log({ result });
*/

// Using npm package 'slugify'
var slugify = require("slugify");

const inputString = "Back-End and Web Development For 2024";

const result1 = slugify(inputString, { lower: true });

console.log({ result1 });

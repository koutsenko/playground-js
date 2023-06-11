const assert = require("assert");
const reverseString = require("./solution");

const input1 = ["h", "e", "l", "l", "o"];
const input2 = ["H", "a", "n", "n", "a", "h"];
const result1 = ["o", "l", "l", "e", "h"];
const result2 = ["h", "a", "n", "n", "a", "H"];

reverseString(input1);
reverseString(input2);

assert(input1.join("") === result1.join(""));
assert(input2.join("") === result2.join(""));

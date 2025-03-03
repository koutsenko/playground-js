const assert = require("assert");
const removeDuplicates = require("./solution");

function compareArrayParts(input, etalon, length) {
  let isEqual = true;

  if (length !== etalon.length) {
    isEqual = false;
  } else {
    for (let index = 0; index < length; index++) {
      if (input[index] !== etalon[index]) {
        isEqual = false;
        break;
      }
    }
  }

  return isEqual;
}

const input1 = [1, 2, 2, 3, 3, 4, 5, 6, 6];
const input2 = [1, 1, 2];
const result1 = [1, 2, 3, 4, 5, 6];
const result2 = [1, 2];

const length1 = removeDuplicates(input1);
const length2 = removeDuplicates(input2);

assert(compareArrayParts(input1, result1, length1));
assert(compareArrayParts(input2, result2, length2));

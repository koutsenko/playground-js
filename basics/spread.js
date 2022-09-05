const isEnabled = true;

// TypeError: (isEnabled && 5) is not iterable
const myArray = [
  'fuck',
  'that',
  ...(isEnabled && 5)
];

console.log(myArray);

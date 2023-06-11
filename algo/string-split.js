const split = (str) => {
  const words = [];
  let index = 0;
  for (const char of str) {
    if (char === " ") {
      words.push("");
      index++;
    } else {
      words[index] = (words[index] === undefined ? "" : words[index]) + char;
    }
  }
  console.log(words);
  return words;
};

split("123 4  555 6");

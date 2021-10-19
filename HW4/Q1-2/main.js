function isEven(string) {
  return string.split("").reverse().join("") === string;
}

console.log(isEven("tyts"));

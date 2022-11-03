function isEven(x) {
  let isEven = x % 2;
  switch (isEven) {
    case 0:
      console.log(isEven === 0);
      break;
    case 1:
      console.log(isEven !== 1);
      break;
    default:
      throw "Invalid argument";
  }
}

console.log(isEven(5 % 2));
console.log(isEven(4 % 2));

function isOdd(isEven) {
  return !isEven;
}
console.log(isOdd(5 % 2));
console.log(isOdd(4 % 2));

class ArrayUtilities {
  /* Your magic here */
  static addZeros = (arr) => arr.map((item) => item * 10);
  static moreThanFifty = (arr) => arr.filter((item) => item > 50);
  static removeFirst = (arr) => arr.slice(1);
  static sumAll = (arr) => {
    let sum = 0;
    for (let i of arr) {
      sum += i;
    }
    return sum;
  };
  static divide = (arr) => Array.from(String(arr));
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);

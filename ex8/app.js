const uneDobraRetorna = (array, ...rest) => {
  let doubledRest = rest.map(item => item * 2);

  let result = [...array, ...doubledRest];

  return result;
};

const r1 = uneDobraRetorna([1, 2, 3], 4, 4);
console.log(r1); // [1, 2, 3, 8, 8]

const r2 = uneDobraRetorna([2], 10, 4, 8);
console.log(r2); // [2, 20, 8, 16]

const r3 = uneDobraRetorna([6, 8]);
console.log(r3); // [6, 8]

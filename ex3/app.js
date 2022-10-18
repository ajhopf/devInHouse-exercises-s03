const concatena = (array1, array2) => {
  const novoArray = [...array1, ...array2];
  console.log(novoArray);
};

concatena([1, 2, 3], [4, 5, 6]);

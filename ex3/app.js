const concatena = (array1, array2) => {
  if (Array.isArray(array1) && Array.isArray(array2)) {
    const novoArray = [...array1, ...array2];
    console.log(novoArray);
  } else {
    console.log('Ambos parâmetros devem ser arrays!');
  }
};

concatena([1, 2, 3], [4, 5, 6]);
concatena([1], 2);
concatena(1, [2]);

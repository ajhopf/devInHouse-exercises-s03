const procuraMinMax = array => {
  if (array && array.length >= 1) {
    if (array.length === 1) {
      return console.log(
        `\nO array possui apenas um item, logo o maior e o menor valor são iguais. Array: ${array}`
      );
    }

    array.sort((a, b) => {
      return a - b;
    });

    const menor = array[0];
    const maior = array[array.length - 1];

    if (maior > menor) {
      console.log(
        `\nDado o array: ${array}\nO maior e o menor valor são:\nMaior valor: ${maior}\nMenor valor: ${menor}`
      );
    } else {
      console.log(
        `\nTodos itens do array são iguais. Array: ${array}\nLogo o maior valor e o menor valor também são iguais: ${array[0]}.`
      );
    }
  } else {
    console.log('\nNão é possível encontrar' + '\nArray:' + array);
  }
};

// [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
// []
// [1]
// [1, -1]
// null
// [-2,-2,-2,-2]
// [20,10, 30]

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax(null);
procuraMinMax([-2, -2, -2, -2]);
procuraMinMax([20, 10, 30]);

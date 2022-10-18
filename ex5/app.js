const somaTudo = (...params) => {
  let sum = 0;
  let notNumber = 0;

  for (let i = 0; i < params.length; i++) {
    if (typeof params[i] === 'number') {
      sum += params[i];
    } else {
      notNumber++;
    }
  }

  console.log(
    !notNumber
      ? `A soma dos números é: ${sum}`
      : `${notNumber} parametros utilizados não foram números, não sendo contabilizados para a soma. \nA soma dos números é: ${sum}`
  );
};

somaTudo(1, 2, 3, 4, 5, 6);
somaTudo(1, [2], { a: 3 }, 'str', 4);
somaTudo(1, true, { a: 3 }, false, 'str', 5);

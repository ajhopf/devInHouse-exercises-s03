const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matemática'
};

const anotherPerson = {
  nome: 'Rachel',
  idade: 29,
  profissao: 'Engenheira'
};

const destructObj = ({ nome, idade, profissao } = obj) => {
  return `Esta é ${nome}, tem ${idade} anos e é ${profissao}`;
};

console.log(destructObj(pessoa));
console.log(destructObj(anotherPerson));

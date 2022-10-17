let paragraph = document.getElementById('paragraph');
let input = document.getElementById('input');

const mensagemOla = () => {
  const message = `Olá, ${input.value}!`;
  paragraph.innerHTML = message;
  console.log(message);

  return message;
};

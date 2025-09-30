// Lista de atividades 03 - Lógica de programação: explore funções e listas - Alura

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

let numero1 = parseInt (prompt ('Digite um número inteiro:'), 10);

function exibirTabuada (numero) {
  for (let i = 1; i <= 10; i++) {
    console.log (`${numero} x ${i} = ${numero * i}`);
  }
}

exibirTabuada (numero1);
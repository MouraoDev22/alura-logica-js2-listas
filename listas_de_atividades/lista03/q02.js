// Lista de atividades 03 - Lógica de programação: explore funções e listas - Alura

// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

let numeroEscolhido1 = prompt ('Digite um número:');

function fatorial (numero) {
  if (numero < 0) return 'Número inválido';
  if (numero == 0 || numero == 1) return 1;
  return numero * fatorial(numero - 1);
}

let fatorial1 = (fatorial (numeroEscolhido1));
console.log (fatorial);
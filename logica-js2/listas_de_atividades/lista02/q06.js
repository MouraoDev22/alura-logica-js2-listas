// Lista de atividades 02 - Lógica de programação: explore funções e listas - Alura

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da 
// multiplicação desse número por ele mesmo

let numero1 = Number (prompt ('Digite um número:'));

function multiplicarNumero (numero) {
    return numero * numero;
}

let valorDaMultiplicaçao = multiplicarNumero (numero1);
console.log (`O produto de ${numero1} vezes ${numero1} é ${valorDaMultiplicaçao}.`);
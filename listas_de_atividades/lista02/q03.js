// Lista de atividades 02 - Lógica de programação: explore funções e listas - Alura

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

let numero1 = Number (prompt ('Digite um número:'));

while (isNaN (numero1)) {
    Number (prompt ('Digite um número:'));
}

function retornarDobro (numero) {
    return numero * 2;
}

let valorDoDobroNumero = retornarDobro (numero1);
console.log (`O dobro de ${numero1} é ${valorDoDobroNumero}.`);

// teste

// Lista de atividades 02 - Lógica de programação: explore funções e listas - Alura

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

let numero1 = Number (prompt ('Digite um número:'));

while (isNaN (numero1)) {
    Number (prompt ('Digite um número:'));
}

let numero2 = Number (prompt ('Digite outro número:'));

while (isNaN (numero2)) {
    Number (prompt ('Digite outro número:'));
}

let numero3 = Number (prompt ('Digite um último número:'));

while (isNaN (numero3)) {
    Number (prompt ('Digite um último número:'));
}

function retornarMedia (numeroUm, numeroDois, numeroTres) {
    return numeroUm + numeroDois + numeroTres / 3;
}

let valorDaMedia = retornarMedia (numero1, numero2, numero3);
console.log (`A média de ${numero1}, ${numero2} e ${numero3} é ${valorDaMedia}.`);
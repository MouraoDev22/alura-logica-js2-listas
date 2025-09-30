// Lista de atividades 02 - Lógica de programação: explore funções e listas - Alura

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

let numero1 = Number (prompt ('Digite um número:'));

while (isNaN (numero1)) {
    Number (prompt ('Digite um número:'));
}

let numero2 = Number (prompt ('Digite outro número:'));

while (isNaN (numero2)) {
    Number (prompt ('Digite outro número:'));
}

function retornarNumeroMaior (numeroUm, numeroDois) {
    return numeroUm > numeroDois ? numeroUm : numeroDois;
}

let numeroEscolhido = retornarNumeroMaior (numero1, numero2);
console.log (numeroEscolhido);
// Lista de atividades 02 - Lógica de programação: explore funções e listas - Alura

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function retornarNumeroMaior (numeroUm, numeroDois) {
    return numeroUm > numeroDois ? numeroUm : numeroDois;
}

let numeroEscolhido = retornarNumeroMaior (2, 4);
console.log (numeroEscolhido);
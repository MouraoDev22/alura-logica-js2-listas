// Lista de atividades 01 - Lógica de programação: explore funções e listas - Alura

// 1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto:
// Hora do Desafio.

let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio';

// 2. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que
// o botão Console for pressionado.

function verificarConsole () {
    console.log ('Botão "Console" foi pressionado.');
}

// 3. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function verificarAlert () {
    console.log ('Botão "Alert" foi pressionado.');
}

// 4. Crie uma função que é executada quando o botão prompt é clicado, perguntando o 
// nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando 
// a resposta com o texto: Estive em {cidade} e lembrei de você.

function verificarPrompt () {
    let cidade = prompt ('Fale um nome de uma cidade no Brasil.');
    alert (`Estive em ${cidade} e lembrei de você.`);
}

// 5. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function verificarSoma () {
    let numeroUm = Number (prompt ('Digite um número inteiro:'));
    let numeroDois = Number (prompt ('Digite outro número inteiro:'));
    let soma = Number (numeroUm + numeroDois);
    alert (`A soma de ${numeroUm} e ${numeroDois} é ${soma}.`);
}
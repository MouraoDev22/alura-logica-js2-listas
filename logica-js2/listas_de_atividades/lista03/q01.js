// Lista de atividades 03 - Lógica de programação: explore funções e listas - Alura

// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a 
// partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como 
// parâmetro.

let altura1 = prompt ('Digite sua altura em metros:');
let peso1 = prompt ('Digite seu peso em quilos:');

function calcularIMC (altura, peso) {
    return altura / peso;
}

let imc1 = calcularIMC (altura1, peso1);
console.log (imc1);
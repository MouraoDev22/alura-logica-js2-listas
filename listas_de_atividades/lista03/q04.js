// Lista de atividades 03 - Lógica de programação: explore funções e listas - Alura

// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
// utilizando altura e largura que serão dadas como parâmetro.

let altura1 = prompt ('Digite a altura em metros:');
let largura1 = prompt ('Digite a largura em metros:');

function mostrarPerimetro (altura, largura) {
    return altura * 2 + largura * 2;
}

function mostrarArea (altura, largura) {
    return altura * largura;
}

let perimetro1 = mostrarPerimetro (altura1, largura1);
let area1 = mostrarArea (altura1, largura1);

console.log (`Perímetro: ${perimetro1} metros.`);
console.log (`Área: ${area1} metros quadrados.`);
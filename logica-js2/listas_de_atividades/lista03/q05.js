// Lista de atividades 03 - Lógica de programação: explore funções e listas - Alura

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
// utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

let raio1 = prompt ('Digite o raio em metros:');

function mostrarPerimetro (raio) {
    return 2 * 3.14 * raio;
}

function mostrarArea (raio) {
    return 3.14 * raio * raio;
}

let perimetro1 = mostrarPerimetro (raio1);
let area1 = mostrarArea (raio1);

console.log (`Perímetro: ${perimetro1} metros.`);
console.log (`Área: ${area1} metros quadrados.`);
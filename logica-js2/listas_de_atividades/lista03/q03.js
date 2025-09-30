// Lista de atividades 03 - Lógica de programação: explore funções e listas - Alura

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna 
// o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

let valorReais1 = prompt ('Digite o valor em reais:');

function converterEmDolares (reais) {
    return reais * 4.80;
}

let valor1 = (converterEmDolares (valorReais1));
console.log (valor1);
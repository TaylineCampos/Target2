
const faturamento = [
    { dia: 1, valor: 1000.0 },
    { dia: 2, valor: 2000.0 },
    { dia: 3, valor: 0.0 },
    { dia: 4, valor: 1500.0 },
    { dia: 5, valor: 3000.0 },
    { dia: 6, valor: 0.0 },
    { dia: 7, valor: 0.0 }
];

// Variáveis para guardar os resultados
let menorValor = null;
let maiorValor = null;
let somaFaturamento = 0;
let diasComFaturamento = 0;

// Calcula o menor e o maior valor, a soma dos faturamentos e o número de dias válidos
for (let i = 0; i < faturamento.length; i++) {
    const valor = faturamento[i].valor;

    // Ignora dias sem faturamento (valor 0)
    if (valor > 0) {
        if (menorValor === null || valor < menorValor) {
            menorValor = valor;
        }

        if (maiorValor === null || valor > maiorValor) {
            maiorValor = valor;
        }

        somaFaturamento += valor;
        diasComFaturamento++;
    }
}

// Calcula a média mensal
const mediaMensal = somaFaturamento / diasComFaturamento;

// Conta os dias com faturamento acima da média
let diasAcimaDaMedia = 0;
for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i].valor > mediaMensal) {
        diasAcimaDaMedia++;
    }
}

// Mostra os resultados
console.log("Menor valor de faturamento:", menorValor);
console.log("Maior valor de faturamento:", maiorValor);
console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);

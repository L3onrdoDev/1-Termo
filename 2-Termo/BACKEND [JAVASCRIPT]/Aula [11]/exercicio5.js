const Input = require('readline-sync');

// Função que calcula 15% de desconto
function calcularDesconto(PrecoOriginal) {
    return PrecoOriginal * 0.85;
}

const Produtos = ["Monitor", "Teclado", "Mouse"];
const Precos = [800, 150, 80];

console.log("~~~~~ Tabela De PRECOS cOM dESCONTO (15%)");

for (let i = 0; i< Produtos.length; i++) {
    let PrecoComDesconto = calcularDesconto(Precos[i]);

    console.log(`${Produtos[i]} : De R$ ${Precos[i]} Por R$ ${PrecoComDesconto.toFixed(2)}`);
}
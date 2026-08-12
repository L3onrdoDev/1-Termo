const Entrada = require('readline-sync');

console.log("--- // Sistema de Vendas ---");

const Produto = Entrada.question("Qual o nome do produto? ");
const PrecoUnitario = Entrada.questionFloat("Qual o preco unitario? ");
const Quantidade = Entrada.questionInt("Quantas unidades foram vendidas? ");

const Total = PrecoUnitario * Quantidade;

console.log("\n --- // Recibo De Vendas ---");
console.log(`Produto: ${Produto}`);
console.log(`Total a pagar: R$ ${Total.toFixed(2)}`)
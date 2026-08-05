const Entrada = require("readline-sync"); // O "const" está definindo nossa variavel "Entrada", Estamos importando a biblioteca "readline-sync" ela é responsável pelo Input.

console.log("~~~~~ Sistema De Vendas - Padaria ~~~~~"); // O "console.log("")" é o print do python.

const Produto = Entrada.question("Digite o nome do produto:  ");
const Preco = Entrada.questionFloat("Digite o valor:  ");
const Quantidade = Entrada.questionInt("Digite a quantidade:  ");

const Total = Preco * Quantidade;

console.log(`\n ~~~~~ Recibo De Vendas ~~~~~`);
console.log(`Produto: ${Produto}`);
console.log(`Total a pagar: R$ ${Total.toFixed(2)}`); // ".toFixed(2) Funciona para deixar o valor que digita assim: 85.00 | Sem ele fica assim: 45"



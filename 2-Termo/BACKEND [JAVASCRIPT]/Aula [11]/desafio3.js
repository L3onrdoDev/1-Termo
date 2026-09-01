const Input = require('readline-sync');

const Gasolina_Preco = Input.questionFloat("Digite o valor do litro de Gasolina: ");
const Alcool_Preco = Input.questionFloat("Digite o vlaor do litro do Alcool: ");

const Calculo = Alcool_Preco / Gasolina_Preco;

if (Calculo <= 0.7) {
    console.log("Abasteça com ÁLCOOL.")
}
else {
    console.log("Abasteça com GASOLINA.")
}

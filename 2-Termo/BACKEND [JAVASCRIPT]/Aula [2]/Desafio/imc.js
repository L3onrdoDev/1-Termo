const Input = require("readline-sync")

console.log("~~~~~ Calculadora IMC ~~~~~")

const Peso = Input.questionFloat("Digite Seu Peso:  ")
const Altura = Input.questionFloat("Digite Sua Altura:  ")

const Calculadora = Peso / (Altura * Altura)

console.log("\n~~~~~ Resultado Calculo ~~~~~")
console.log(`Seu IMC é:  ${Calculadora.toFixed(2)}`)
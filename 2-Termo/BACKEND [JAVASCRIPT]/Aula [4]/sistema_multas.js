const Input = require('readline-sync');

console.log("~~~~~ Sistema Multas ~~~~~");

const Placa = Input.questionFloat("Digite a Placa:  ");
const Velocidade = Input.questionInt("Digite a Velocidade:  ");

if (Velocidade > 80) {
    console.log("Você estava a cima da velocidade da via e foi MULTADO!");
} else (Velocidade <= 80); {
    console.log("Você esta na velocidadE certa, BOA VIAGEM!");
} 
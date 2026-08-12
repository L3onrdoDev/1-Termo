const Input = require('readline-sync');

const Nome = Input.question("Digite seu nome:  ");
const Nota1 = Input.questionFloat("Digite a nota 1:  ");
const Nota2 = Input.questionFloat("Digite a nota 2:  ");

const Media = (Nota1 + Nota2) / 2;

console.log(`\n Olá ${Nome}, Sua media final é ${Media.toFixed(1)}`);

if (Media >= 7) {
    console.log("Situação: Aprovado");
} else if (Media >= 5 && Media < 7) {
    console.log("Situação: Recuperação");
} else {
    console.log("Situação: Reprovação");

}
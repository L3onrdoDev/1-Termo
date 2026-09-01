const Input = require('readline-sync');

const Renda_Mensal = Input.questionFloat("Digite Sua Renda Mensal:  ");
const Nome_Limpo = Input.question("Seu nome esta limpo? (Sim/Nao) ");

if (Renda_Mensal > 2000 && Nome_Limpo === "Sim") {
    console.log("Empréstimo Aprovado!");
}
else {
    console.log("Empréstimo Negado!");
}

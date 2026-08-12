const Input = require('readline-sync');

const Nome = Input.question("Digite Seu Nome:  ");
const Idade = Input.questionInt("Digite Sua Idade:  ");

if (Idade >= 16) {
    console.log("Parabens, Você ja pode votar.");
} else {
    console.log("Infelizmente você ainda não pode votar.");
}
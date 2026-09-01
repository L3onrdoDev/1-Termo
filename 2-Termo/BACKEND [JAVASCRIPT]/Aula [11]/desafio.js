const Input = require('readline-sync');

const Nome = Input.question("Digite Seu Nome:   ");
const Ano_Nascimento = Input.question("Digite Seu Ano De Nascimento:  ");

if (Ano_Nascimento <= 2006) {
    console.log("Você Já Pode Votar!");
}
else {
    console.log("Infelizmente Você Ainda Não Pode Votar.");
}
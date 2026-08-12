const Input = require('readline-sync');

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Sistema De Classificação: Natação");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const Nome = Input.question("Nome Atleta:  ");
const Idade = Input.questionInt("Idade Atleta:  ");

console.log(`\nAtleta: ${Nome}`);

if (Idade < 5) {
    console.log("Muito Jovem Para Competir.");
}
else if (Idade >= 5 && Idade <= 10) {
    console.log("Categoria: Infantil");
}
else if (Idade >= 11 && Idade <= 17) {
    console.log("Categoria: Juvenil");
}
else if (Idade >= 18 && Idade <= 60) {
    console.log("Categoria: Adulto");
}
else {
    console.log("Categoria: Sênior");
}

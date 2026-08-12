const readline = require("readline-sync");
const nome = readline.question("Digite o nome do aluno: ");
const idade = readline.questionInt("Digite sua idade: ")
const escola = readline.question("Digite o nome da escola: ")
const cidade = readline.question("Digite o nome da cidade: ")
const disciplina = readline.question("Digite a disciplina: ");
const nota1 = Number(readline.question("Digite a primeira nota: "));
const nota2 = Number(readline.question("Digite a segunda nota: "));
const faltas = Number(readline.question("Digite a quantidade de faltas: "));
const media = (nota1 + nota2) / 2;
console.log("\n--- RELATÓRIO DO ALUNO ---");
console.log("Aluno:", nome);
console.log("Idade:", idade);
console.log("Escola:", escola); 
console.log("Cidade:", cidade);
console.log("Disciplina:", disciplina);
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Média:", media);
console.log("Faltas:", faltas);
// "length" Quantidade de caracters de numeros ou palavas. 

const Input = require("readline-sync");

console.log("~~~~~ Registro De Temperaturas ~~~~~")

const temperatura = [];

const quantidade = Input.questionInt("Quantas temperaturas deseja registrar?  ");

for (let i= 0; i < quantidade; i++) {
    let Temperaturas = Input.questionFloat(`Temperatura ${i +1}:  `);
    temperatura.push(Temperaturas);
}   
console.log("\n~~~~~ Relatório ~~~~~");
console.log(`Temperaturas Registradas: ${temperatura.join("°C | ")} °C`);

console.log(`Quantidade De Temperaturas: ${temperatura.length}`);
console.log(`A Primeira Temperatura: ${temperatura[0]}`);
console.log(`A Ultima Temperatura : ${temperatura[temperatura.length -1]}`);
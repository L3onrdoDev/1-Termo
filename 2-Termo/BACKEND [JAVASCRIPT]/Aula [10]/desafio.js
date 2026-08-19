const Input = require('readline-sync');

console.log("~~~~~~~~~~ Controle Validade ~~~~~~~~~~");

const Banco_Dados = [];
let Calculo = 0;

const Pecas = Input.questionInt("Quantas Pecas Serao Avaliadas?  ");
for (let i = 0; i < Pecas; i++) {
    let Peso_Pecas = Input.questionInt(`Digite o peso das pecas ${i +1}:  `)
    Banco_Dados.push(Peso_Pecas);
    Calculo = Peso_Pecas / Pecas;
}

console.log("~~~~~~~~~~ Registro Auditoria ~~~~~~~~~~");
console.log(`Pesos Registrados ${Banco_Dados.join(" Kg | ")} Kg`)
console.log(`Media Do Lote:  ${Calculo} Kg`);

if (Calculo >= 4.8 && Calculo <= 5.2) {
    console.log("Status Final: Lote Aprovado!");
}
else {
    console.log("Status Final: Lote Reprovado!");
}

const Peso_Max = Math.max(...Banco_Dados);
console.log(`Maior Peso: ${Peso_Max}`)
const Peso_Min = Math.min(...Banco_Dados);
console.log(`Menor Peso: ${Peso_Min}`);
console.log(`Quantidade Pecas: ${Banco_Dados.length}`);
console.log(`O lote atual ficou ${Calculo} Kg acima ou abaixo de 5 Kg.`)
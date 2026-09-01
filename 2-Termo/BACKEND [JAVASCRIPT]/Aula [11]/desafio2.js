const Input = require("readline-sync");

const Valor_Conta = Input.questionFloat("Digite o Valor da Conta:  ");

if (Valor_Conta >= 100) {
    const Valor_Desconto = Valor_Conta * 0.10;
    const Valor_Final = Valor_Conta - Valor_Desconto;
    console.log(`O valor da conta com desconto de 10% é: R$ ${Valor_Final.toFixed(2)}`);
}
else {
    console.log(`O valor da conta é: R$ ${Valor_Conta.toFixed(2)}`);
}
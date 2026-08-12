const Input = require('readline-sync')

console.log("~~~~~ Analise De Credito ~~~~~")

// Coleta de dados / Inputs / Perguntas.
const Nome = Input.question("Insira Seu Nome:  ")
const Idade = Input.questionInt("Insira Sua Idade:  ")
const Renda = Input.questionFloat("Insira Sua Renda Mensal:  ")
const Imovel = Input.keyInYNStrict("Possui Imovel Proprio?  ") // "keyIntYNStrict" Serve para tornar o input a uma pergunta de Y ou N.

// Lógica com if/else para ler as informações.
// (Idade >= 18) É obrigatorio, se a Idade for maior ou igual a 18 anos está liberado, caso ao contrario não.
// (Renda .= 2500 || Imovel === true) A pessoa tem que possuir Imovel ou Renda maior de 2500. "||" Significa "Ou".  "&&" Significa "E".
if (Idade >= 18 && (Renda >= 2500 || Imovel === true)) {
    console.log(`\n Parabens, ${Nome}! Seu credito foi APROVADO`)
} else {
    console.log(`\n Sinto muito, ${Nome}. Seu credito foi NEGADO.`)
}
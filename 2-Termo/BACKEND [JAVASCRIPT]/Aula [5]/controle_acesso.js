const Input = require('readline-sync');

console.log("~~~~~ Controle Acesso - Laboratório ~~~~~")

const Idade = Input.questionInt("Digite a Idade Do Aluno:  ");
const Autorizacao = Input.keyInYNStrict("Possui Autorizacao?  ");
const Acompanhado = Input.keyInYNStrict("Esta Acompanhado Do Professor?  ");
const Suspenso = Input.keyInYNStrict("O aluno esta suspenso?  ");

if (Idade >= 16 && Autorizacao === true || Acompanhado === true && Suspenso === false) {
    console.log("Acesso liberado. Seja Bem-Vindo(a).");
}
else {
    console.log("Acesso negado.")
}
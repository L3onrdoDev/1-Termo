const Input = require('readline-sync');

// 1. Função para validar status (Aprovado/Reprovado)
function VerificarStatus(Nota) {
    return Nota >= 7 ? "Aprovado" : "Reprovado"; // "?" Significa que vou fazer um if, else.
}

const Turma = []

// 2. Loop para cadastrar objetos no Array
for (let i = 0; i < 3; i++) {
    console.log(`\n ~~~~~ Cadastro Alunos ${i+1} ~~~~~`);
    let NomeAluno = Input.question("Nome:  ");
    let NotaAluno = Input.question("Nota:  ");

    // Criando o objeto e guardando no Array
    const NovoAluno = {
        Nome: NomeAluno,
        Nota: NotaAluno,
        Status: VerificarStatus(NotaAluno) // Usando a função aqui
    };

    Turma.push(NovoAluno);
}

// 3. Exibindo o relatório final
console.log(`\n ~~~~~ Relatorio Final ~~~~~`);
for (let i = 0; i < Turma.length; i++) {
    console.log(`${Turma[i].Nome} - Nota: ${Turma[i].Nota} | Status: ${Turma[i].Status}`);
}
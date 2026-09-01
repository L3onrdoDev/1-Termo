// Criando a "maquina" de calcular media
const Input = require('readline-sync');
function CalcularMedia(Nota1, Nota2) {
    return (Nota1, Nota2) / 2;
}

// Usando a maquina
const Nota1 = Input.questionInt("Qual sua nota 1?  ");
const Nota2 = Input.questionInt("Qual sua nota 2?  ");
const Resultado = CalcularMedia(Nota1, Nota2);
console.log(`A media calculada foi: ${Resultado}`)
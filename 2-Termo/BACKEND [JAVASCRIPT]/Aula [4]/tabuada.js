const Input = require('readline-sync');

console.log("~~~~~ Sistema De Tabuada ~~~~~");

const Numero = Input.questionInt("Tabuada de qual numero?  ");

for (let i = 1; i <= 10; i++) {
    console.log(`${Numero} x ${i} = ${Numero * i}`);
}
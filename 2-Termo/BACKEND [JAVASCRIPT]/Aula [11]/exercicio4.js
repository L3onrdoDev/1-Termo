const Input = require('readline-sync');

// Criando a "ferramenta" de conversão
function ConverterParaFahrenheit(Celsius) {
    let Fahrenheit = (Celsius * 9/5) + 32;
    return Fahrenheit;
}

const TempCelsius = Input.questionFloat("Digite a temperatura em Celsius:   ");

// Chamando a função e guardando o que ela "cuspiu" de volta
const TempFah = ConverterParaFahrenheit(TempCelsius);
console.log(`A temperatura convertida e: ${TempFah.toFixed(1)}°F`);
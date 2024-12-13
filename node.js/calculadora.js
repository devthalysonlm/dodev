

function somar(num1, num2){
    return num1 + num2
}

function subtrair(num1, num2){
    return num1 - num2
}

function multiplicar(num1, num2){
    return num1 * num2
}

function dividir(num1, num2){
    return num1 / num2
}
//Exportando o modulo das funções para utilizar em index.js
module.exports = {somar, subtrair, multiplicar, dividir}
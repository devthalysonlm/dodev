
function GastoDeCombustivel(distancia, tipo){
   
    let contagem;

    const consumoGasolina = 16
    const consumoEtanol = 11

    if(tipo == 1){
        contagem = distancia * consumoGasolina
    }
    else if(tipo == 2){
        contagem = distancia * consumoEtanol
    } else {
        return `Tipo de combústivel inválido`
    }

    return contagem;
}



let resultado = GastoDeCombustivel(1000, 3);
console.log(`O gasto total de combustível é: ${resultado}`);

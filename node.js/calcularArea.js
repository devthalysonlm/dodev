
function calcularArea(forma, d1, d2){

    let area;

    if(forma === 'circulo'){
        area = 3.14 * d1**2

    } else if (forma === 'quadrado'){
        area = d1 * d1

    } else if (forma === 'triangulo'){
        area = d1 * d2 / 2
        
    } else {
        return 'Forma inválida'
    }
    return area 

}

let area = calcularArea('circulo', 5)
console.log(area)

module.exports = {calcularArea}



const {calcularArea} = require("./calcularArea")


test('Calcular área de um circulo com raio 5.', () => {
    const resultado = calcularArea('circulo', 5)
    expect(resultado).toBe(78.5);
});

test('Calcular área de um quadrado com lado 4.', () => {
    const resultado = calcularArea('quadrado', 4)
    expect(resultado).toBe(16);
});

test('Calcular area de um triângulo com base 10 e altura 8.', () => {
    const resultado = calcularArea('triangulo', 10, 8)
    expect(resultado).toBe(40);
});

test('Forma inválida', () => {
    const resultado = calcularArea('hexagona', 4)
    expect(resultado).toBe('Forma inválida');
});
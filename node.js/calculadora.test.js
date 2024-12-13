const calculadora = require("./calculadora")


test('Somar um mais um é igual a dois', () => {
    expect(calculadora.somar(1, 1)).toBe(2)
  });


test('Sbtrair 1 com 1 é igual a 0', () => {
    expect(calculadora.subtrair(1, 1)).toBe(0)
});


test('Multiplicar 1 com 1  é igual a 1', () => {
    expect(calculadora.multiplicar(2, 1)).toBe(2)
});


test('Dividir 4 com 2 é igual a 2', () => {
    expect(calculadora.dividir(4, 2)).toBe(2)
});
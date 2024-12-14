const {GastoDeCombustivel} = require("./medidorGasolina")


test('Calcula gasto com gasolina', () => {
    const resultado = GastoDeCombustivel(1000,1)
    expect(resultado).toBe(16000);
});

test('Calcula gasto com etanol', () => {
    const resultado = GastoDeCombustivel(2000, 2)
    expect(resultado).toBe(22000);
});

test('Retorna mensagem de erro por combústivel inválido', () => {
    const resultado = GastoDeCombustivel(1000, 3)
    expect(resultado).toBe('Tipo de combustivel inválido!');
});

test('Retorna 0 para distância 0', () => {
    const resultado = GastoDeCombustivel(0, 1)
    expect(resultado).toBe(0);
});

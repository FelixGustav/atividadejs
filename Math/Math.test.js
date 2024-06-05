
const Math= require('./Math');

// Testes para calcularResposta
describe('Testes para calcularResposta', () => {
    test('Calcula corretamente a operação para 33#22', () => {
        expect(Math("33#22")).toBe(726);
    });

    test('Calcula corretamente a operação para 50#24', () => {
        expect(Math("50#24")).toBe(26);
    });

    test('Calcula corretamente a operação para 265#17', () => {
        expect(Math("265#17")).toBe(14454768833061214000);
    });

    test('Calcula corretamente a operação para 765#4', () => {
        expect(Math("765#4")).toBe(7654);
    });

    test('Retorna "Operador inválido" para operador desconhecido', () => {
        expect(Math("10#3")).toBe("Operador inválido");
    });
});

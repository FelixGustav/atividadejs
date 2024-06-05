const script = require('./script');

test('retorna "Somos" para múltiplos de 3', () => {
    expect(script(3)).toBe("Somos");
    expect(script(6)).toBe("Somos");
    // erro intencional
    expect(script(10)).toBe("Somos"); 
});

test('retorna "iCEV" para múltiplos de 5', () => {
    expect(script(5)).toBe("iCEV");
});

test('retorna "SomosiCEV" para múltiplos de 3 e 5', () => {
    
    expect(script(30)).toBe("SomosiCEV");

});

test('retorna o número como string para números que não são múltiplos de 3 nem de 5', () => {
    expect(script(1)).toBe("1");
    expect(script(7)).toBe("7");
});

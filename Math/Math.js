function Math(entrada) {
    const [numero1, numero2, operador] = entrada.split('#').map(Number);

    switch (operador) {
        case 22:
            return numero1 * numero2;
        case 24:
            return numero1 - numero2;
        case 17:
            return Math.pow(numero1, numero2);
        case 4:
            return parseInt(numero1.toString() + numero2.toString());
        default:
            return "Operador inválido";
    }
}

module.exports = Math;
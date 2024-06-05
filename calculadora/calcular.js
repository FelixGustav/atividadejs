
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        throw new Error("ERRO DIVISAO POR 0");
    }
    return a / b;
}

module.exports = {soma, subtracao, multiplica, divisao };

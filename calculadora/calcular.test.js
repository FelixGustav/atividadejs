// testCalculator.js
const { soma } = require('./calcular');
const { soma, subtracao, multiplica, divisao } = require('./calcular');

console.log("teste soma:");
console.log(soma(1, 2) === 3);
console.log(soma(-1, -2) === -3);


console.log("teste subtracao:");
console.log(subtracao(5, 3) === 2);
console.log(subtracao(-5, -3) === -2);

console.log("teste multiplicaçao:");
console.log(multiplica(2, 3) === 6);
console.log(multiplica(-2, 3) === -6);


console.log("teste divisao:");
console.log(divisao(6, 3) === 2);
console.log(divisao(5, 2) === 2.5);
try {
    divide(1, 0);
} catch (e) {
    console.log(e.message === "divisao por 0");
}

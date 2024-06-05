const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./temperatureConverter');

console.log("teste da function   celsiusToFahrenheit ");
console.log(celsiusToFahrenheit(0) === 32);


console.log("teste da function       Fahrenheit to Celsius Tests:");
console.log(fahrenheitToCelsius(32) === 0);

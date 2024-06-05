// Celsius para fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// fahrenheit para celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

module.exports = { celsiusToFahrenheit, fahrenheitToCelsius };
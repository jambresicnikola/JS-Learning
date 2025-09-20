/*function checkIfEven(a) {
    return a % 2 == 0 ? true : false;
}

console.log(checkIfEven(10));*/

const temperature = document.getElementById("temperature");
const celsiusToFahrenheit = document.getElementById("celsiusToFahrenheit");
const fahrenheitToCelsius = document.getElementById("fahrenheitToCelsius");
const conversionResult = document.getElementById("conversionResult");

function convert() {
    let temp = temperature.value;

    if (celsiusToFahrenheit.checked) {
        temp = (temp * (9/5)) + 32;
        conversionResult.textContent = temp + " F";
    } else if(fahrenheitToCelsius.checked) {
        temp = (temp - 32) / 1.8;
        conversionResult.textContent = temp + " °C";
    } else {
        conversionResult.textContent = "Please select a unit.";
    }
}
/*function checkIfEven(a) {
    return a % 2 == 0 ? true : false;
}

console.log(checkIfEven(10));*/

/*
        HTML:
        <div class="container">
            <h3>Temperature conversion:</h3>
            <input type="number" id="temperature"><br><br>
            <input type="radio" id="celsiusToFahrenheit" name="unit">
            <label for="celsiusToFahrenheit">Celsius -> Fahrenheit</label><br>
            <input type="radio" id="fahrenheitToCelsius" name="unit">
            <label for="fahrenheitToCelsius">Fahrenheit -> Celsius</label><br><br>

            <button onclick="convert()">Convert</button>
            <p id="conversionResult"></p>
        </div>


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
}*/

/*let cars = ["BMW", "Audi", "Mercedes", "Porsche"];

cars.push("Peugeot");
cars.unshift("Renault");

cars.sort().reverse();

for(let car of cars) {
    console.log(car);
}

cars.pop();
cars.shift();

let index = cars.indexOf("Renault");  //useful when searching for something
console.log(index);*/

/*let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);
console.log(max);*/

/*function sum (...numbers) {
    let sum = 0;

    for(number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(sum(1, 2, 3, 4, 5));*/


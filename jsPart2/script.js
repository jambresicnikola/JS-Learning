/*
Math = lots of useful math constants and functions

const PI = Math.PI;
console.log(PI);*/

/*
Roll the dice game:

        HTML:
        <div class="container">
            <h1>Roll the dice!</h1>
            <button id="rollButton">Roll</button>
            <h3 id="rollResult"></h3>
        </div>


let min = 1, max = 6, rollResult;

document.getElementById("rollButton").onclick = function() {
    rollResult = Math.floor(Math.random() * max) + min;
    document.getElementById("rollResult").textContent = rollResult;
}*/

/*
        HTML:
        <div class="container">
            <h3>Favourite german car brand?</h3>
            <input type="radio" id="bmw" name="germanCars">
            <label for="bmw">BMW</label><br>
            <input type="radio" id="mercedes" name="germanCars">
            <label for="mercedes">Mercedes</label><br>
            <input type="radio" id="audi" name="germanCars">
            <label for="audi">Audi</label><br><br>

            <button id="submitButton">Submit</button><br><br>

            <p id="message"></p>
        </div>


const bmw = document.getElementById("bmw");
const mercedes = document.getElementById("mercedes");
const audi = document.getElementById("audi");
const submitButton = document.getElementById("submitButton");
const message = document.getElementById("message");

submitButton.onclick = function() {
    if (bmw.checked) {
        message.textContent = "You are a legend.";
    } else if (mercedes.checked) {
        message.textContent = "I see, you like luxury.";
    } else {
        message.textContent = "I see, you like road trips and snow.";
    }
}*/

/*let age = 19;
let message = age < 18 ? "You must be 18+ to enter the site!" : "Welcome broski!";
console.log(message);*/

/*let testResult = 46, grade;

switch(true) {
    case testResult >= 90:
        grade = 5;
        break;
    case testResult >= 78:
        grade = 4;
        break;
    case testResult >= 60:
        grade = 3;
        break;
    case testResult >=45:
        grade = 2;
        break;
    default:
        grade = 1;
}

console.log(grade);*/

/*let username = "      Nidjo           ".trim().toLowerCase();
console.log(username);

let fullName = "Jack Jackson";
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log("First name: " + firstName + "\nLast name: " + lastName);*/

/*let counter = 0;

while(counter < 10) {
    console.log(counter);
    counter++;
}

for(let i = 10; i > -1; i--) {
    console.log(i);
}*/

let randomNumber = Math.floor(Math.random() * 100);
let guess, attempts = 1;
const message = document.getElementById("message");

while(true) {
    guess = Number(window.prompt("Guess the number (0-100):"));

    if (guess < 0 || guess > 100 || isNaN(guess)) {
        window.alert("Please enter a number between 0 and 100.");
        continue;
    }

    if (guess == randomNumber) {
        break;
    } else {
        attempts++;

        if(guess < randomNumber) {
            window.alert("Higher!");
        } else {
            window.alert("Lower!");
        }
    }
}

message.textContent = `Congrats, you guessed the right number! It took you ${attempts} attempts.`;
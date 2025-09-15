/*console.log("BMW");
window.alert("BMW alert");*/

/*document.getElementById("myH1").textContent = "BMW";
document.getElementById("myP").textContent = "BWM three series...";*/

/*let age = 21;
console.log(`I am ${age} years old.`);
console.log(typeof age);

let firstName = "Nikola";
console.log(`My name is ${firstName}.`);
console.log(typeof firstName);

let forSale = false;
console.log(`Is car for sale?: ${forSale}`);*/

/*let firstName = "Nikola", age = 21, isStudent = true;
document.getElementById("firstName").textContent = "My name is " + firstName;
document.getElementById("age").textContent = "I am " + age + " years old";
document.getElementById("student").textContent = "Student status: " + isStudent;*/

/*let students = 30;
students **= 2;
console.log(students);*/

/*let username;
username = window.prompt("Type your username: ");
console.log(username);*/

/*
        HTML:
            <h1 id="welcomeH1">Welcome</h1>
            <label for="usernameField">Username:</label>
            <input type="text" id="usernameField"><br><br>
            <button id="submitButton">Submit</button>


let username;
document.getElementById("submitButton").onclick = function() {
    username = document.getElementById("usernameField").value;
    document.getElementById("welcomeH1").textContent = `Welcome ${username}`;
}*/

/*let x = "", y = "String", z = "Something";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/

/*
        HTML:
            <h1>Calculate circle area</h1>
            <label for="radius">Enter circle radius:</label>
            <input type="number" id="radiusInputField"><br><br>
            <button id="submitButton">Calculate</button>
            <h3 id="areaOutput"></h3>


let radius, area;
const PI = 3.14;

document.getElementById("submitButton").onclick = function() {
    radius = document.getElementById("radiusInputField").value;
    area = radius**2 * PI;
    document.getElementById("areaOutput").textContent = "Area od a cricle: " + area;
}*/

let counter = 0;
const counterH1 = document.getElementById("counterH1");

document.getElementById("decrementButton").onclick = function() {
    counter--;
    counterH1.textContent = counter;
}

document.getElementById("resetButton").onclick = function() {
    counter = 0;
    counterH1.textContent = counter;
}

document.getElementById("incrementButton").onclick = function() {
    counter++;
    counterH1.textContent = counter;
}
function generatePassword() {
    const passwordLength = Number(document.getElementById("passwordLength").value);
    const includeLowercaseChars = document.getElementById("includeLowercaseChars").checked;
    const includeUppercaseChars = document.getElementById("includeUppercaseChars").checked;
    const includeSpecialChars = document.getElementById("includeSpecialChars").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const returnMessage = document.getElementById("returnMessage");

    let allowedLowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let allowedUppercaseChars = allowedLowercaseChars.toUpperCase();
    let allowedSpecialChars = "@$%#&-_";
    let allowedNumbers = "1234567890";

    let selectedChars = "";
    selectedChars += includeLowercaseChars ? allowedLowercaseChars : "";
    selectedChars += includeUppercaseChars ? allowedUppercaseChars : "";
    selectedChars += includeSpecialChars ? allowedSpecialChars : "";
    selectedChars += includeNumbers ? allowedNumbers : "";

    if (passwordLength <= 0 || selectedChars.length === 0) {
        returnMessage.textContent = "Please make sure entered password length is at least 1 and you selected at least one option.";
    } else {
        let generatedPassword = "";

        for (let i = 0; i < passwordLength; i++) {
            let randomCharIndex = Math.floor(Math.random() * selectedChars.length);
            generatedPassword += selectedChars.charAt(randomCharIndex);
        }

        returnMessage.textContent = "Generated password: " + generatedPassword;
    }
}
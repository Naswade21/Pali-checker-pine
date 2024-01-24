const palindromeChecker = document.getElementById('check-btn');
const palindromeResult = document.getElementById('#result');
const output = document.getElementById('output');
const palindromeTextInput = document.getElementById('text-input');
let isError = false;

// pseudocode for step 4--- If the user doesn't input anything into the text-input when Palindrome check button is clicked then send an alert that says Please input a value(can write something funny)

function invalidInput (palindromeTextInput) {
    if (palindromeTextInput === null){
        alert('Please input some damn text please!');
    } else {
        return;
    }
}

palindromeChecker.addEventListener("click", invalidInput);
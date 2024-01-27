const palindromeChecker = document.getElementById('check-btn');
const palindromeResult = document.getElementById('#result');
const palindromeTextInput = document.getElementById('text-input');
let isError = false;

// pseudocode for step 4--- If the user doesn't input anything into the text-input when Palindrome check button is clicked then send an alert that says Please input a value(can write something funny)

palindromeChecker.addEventListener('click', () => {
    if (palindromeTextInput.value === '') {
        return alert('Please Input a damn value please! I do not have all DAYY')
    } else if (palindromeTextInput.value === /\w/g) {
        palindromeResult.innerHTML = `<p>${palindromeTextInput.value
        } is a palindrome <p>`
    } else {
        return palindromeResult.innerHTML = `<p>What is this Maybach Music?<p>`
    }
});

//Step 5 pseudocode --- If the user types in a 1 letter word that is capital(or lowercase) after check-btn is clicked, the return element will display in our hidden div "__ is a palindrome"

palindromeChecker.addEventListener('click', (str) => {
    if (palindromeTextInput.value === /\w/g) {
        return console.log();
    }
})
const palindromeChecker = document.getElementById('check-btn');
const palindromeResult = document.getElementById('#result');
const palindromeTextInput = document.getElementById('text-input');
let isError = false;

function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); //Makes words all lowercase then replaces non-alphanumeric characters(^) with the string the user types
    let reverseStr = cleanStr.split().reverse().join(); //Take your cleaned input and split individually, reverse the words and join them back together to see if its similar backwards and forwards
    return cleanStr === reverseStr; //Checks if forward string and backward string are equal
}

function insertAnswer() {
    let ansText = " is a Palindrome";
    let wrongText = " is not a Palindrome"
    if (isPalindrome(palindromeTextInput.value) === true) {
        palindromeResult.innerHTML += `${palindromeTextInput.value}${ansText}`
    } else {
         palindromeResult.innerHTML += `${palindromeTextInput.value}${wrongText}`
    }
}

palindromeChecker.onclick = function () {

    
    
}

const palindromeChecker = document.getElementById('check-btn');
const palindromeResult = document.getElementById('#result');
const palindromeTextInput = document.getElementById('text-input');
let isError = false;

const isPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); //Makes words all lowercase then replaces non-alphanumeric characters(^) with the string the user types
    let reverseStr = cleanStr.split().reverse().join(); //Take your cleaned input and split individually, reverse the words and join them back together to see if its similar backwards and forwards

    return cleanStr === reverseStr; //Checks if forward string and backward string are equal
}

function paliCheck () {
    let pChecker = palindromeTextInput.value
   let check = isPalindrome(pChecker);

    if (check === true) {
       console.log(pChecker + ' is a palindrome!')
    } else {
        console.log(pChecker + ' is not a palindrome!')
    }
}

function resultPalindrome(num) {
    if (palindromeTextInput.value === '') {
        return alert('Please Input value')
    } else {
        return alert('insert function here')
    }
}

palindromeChecker.addEventListener('click', paliCheck)
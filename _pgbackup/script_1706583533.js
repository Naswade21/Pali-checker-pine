const palindromeChecker = document.getElementById('check-btn');
const palindromeResult = document.getElementById('#result');
const palindromeTextInput = document.getElementById('text-input');
let isError = false;

const isPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); //Makes words all lowercase then replaces non-alphanumeric characters(^) with the string the user types
    let reverseStr = cleanStr.split().reverse().join(); //Take your cleaned input and split individually, reverse the words and join them back together to see if its similar backwards and forwards

    return cleanStr === reverseStr; //Checks if forward string and backward string are equal
}

const addInnerText = () => {
    const newText = `<p>Hey</p>`
    palindromeResult.innerHTML = newText;
}

const checkPalindrome = () => {
    
    const check = palindromeTextInput.value;

   const isPali = isPalindrome(check);

    addInnerText = isPali ? check + ' is a palindrome' : check + ' is not a palindrome';
}

palindromeChecker.addEventListener('click', checkPalindrome);


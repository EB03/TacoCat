
function getUserInput() {
    let userInput = document.getElementById("userInput").value;

    let palindrome = calculatePalindrome(userInput);

    displayPalindrome(palindrome);
}

function calculatePalindrome(userInput) {
    let result = document.getElementById("result");
    let reversed = [];
    let reversedNoSpaces = "";
    let userInputNoSpaces = "";
    let isPalindrome = "";

    for (let i = userInput.length - 1; i >= 0; i--) {
        reversed += userInput[i];    
    }

    //If we don't take out spaces, it won't be able to compare the arrays to see if they're palindrome correctly
    reversedNoSpaces = reversed.replace(/\s/g, '');
    userInputNoSpaces = userInput.replace(/\s/g, '');

    //Need to reset the class list each time the user clicks the button to apply the correct alert status
    result.classList.remove("alert", "alert-success", "alert-warning", "alert-danger");

    if(userInputNoSpaces == reversedNoSpaces) {
        if(userInputNoSpaces.length == 1) {
            result.classList.add("alert", "alert-warning");
            isPalindrome = `I guess you could say ${reversed} is a palindrome, but it only contains 1 character!`;
        } else if(userInputNoSpaces.length < 1) {
            result.classList.add("alert", "alert-warning");
            isPalindrome = `I guess you could say ${reversed} is a palindrome, but it doesn't contain any characters!`;
        } else {
            result.classList.add("alert", "alert-success");
            isPalindrome = `Success! ${reversed} is a palindrome!`;
        }
    } else {
        result.classList.add("alert", "alert-danger")
        isPalindrome = `Oh No! ${userInput} is not a plaindrome! This is the output backwards: ${reversed}`;
    }
    return isPalindrome;
}

function displayPalindrome(palindrome) {
    let result = document.getElementById("result");
    result.classList.remove("invisible");
    result.innerHTML = palindrome;
}
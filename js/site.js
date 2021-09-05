
function getUserInput() {
    let userInput = document.getElementById("userInput").value;

    let returnObj = calculatePalindrome(userInput);

    displayPalindrome(returnObj);
}

function calculatePalindrome(userInput) {
    let reversed = [];
    let returnObj = {};
    let userInputNoSpaces = "";

    userInput = userInput.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    userInputNoSpaces = userInput.replace(regex, "");

    for (let i = userInputNoSpaces.length - 1; i >= 0; i--) {
        reversed += userInputNoSpaces[i];    
    }
    
    returnObj.reversed = reversed;
    
    if(userInputNoSpaces == reversed) {
        if(userInputNoSpaces.length == 1) {
            returnObj.msg = `I guess you could say "${userInput}" is a palindrome, but it only contains 1 character!`;
            returnObj.alert = "alert-warning";
        } else if(userInputNoSpaces.length < 1) {
            returnObj.msg = `You didn't enter anything! Please enter a word, sentence or phrase`;
            returnObj.alert = "alert-warning";
        } else {
            returnObj.msg = `Success! "${userInput}" is a palindrome! The string reversed is: "${returnObj.reversed}"`;
            returnObj.alert = "alert-success";
        }
    } else {
        returnObj.msg = `Oh No! "${userInput}" is not a palindrome! The string reversed is: "${returnObj.reversed}"`;
        returnObj.alert = "alert-danger";
    }
    return returnObj;
}

function displayPalindrome(returnObj) {
    result.classList.remove("alert", "alert-success", "alert-warning", "alert-danger", "invisible");
    result.classList.add("alert", `${returnObj.alert}`);
    result.innerHTML = `${returnObj.msg}`;
}
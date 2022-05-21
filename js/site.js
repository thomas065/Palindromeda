//get user input
function getValue() {
    //make sure the alert is invisible
    document.getElementById("alert").classList.remove("invisible");

    //get user string for the page
    let userString = document.getElementById("userString").value;

    //check for a palindrome
    let returnObj = checkForPalindrome(userString);
    
    //display message to the screen
    displayMessage(returnObj);
}

//check if string is a palindrome
function checkForPalindrome(userString) {

    //taco cat
    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");
    
    let revString = [];
    let returnObj = {};


    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    if (revString == userString) {
        returnObj.msg = "Well done! You entered a palindrome."
    }
    else {
        returnObj.msg = "Sorry!  That was not a palindrome."
    }

    returnObj.reversed = revString;
    return returnObj;
}

//display message to the screen
function displayMessage() {
    
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

}
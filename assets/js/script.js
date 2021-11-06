// Assignment code here
var minLength = 8;
var maxLength = 128;
var capLetters = "abcdefghijklmnopqrstuvwxyz";
var lowLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


//pseudo code

// click generate password button

//ask the following

// how long is the password? between 8 and 128 characters
//restrict length

var lengthPw = function(userInput) {
  if(userInput >= minLength && userInput <= maxLength)
  {
    return true;
  }
  else
  {
    window.alert("Please enter a value between " + minLength + " and " + maxLength + " characters.");
    return false;
  }
}

// does pw include lowercase

//uppercase

//numbers

//special characters

//password will contain the following..

//display password

//copy password

//has to be a string
function generatePassword() {
  window.alert(lengthPw)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
var numbers = "0123456789";
var capLetters = "abcdefghijklmnopqrstuvwxyz";
var lowLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");


//pseudo code

// click generate password button

//ask the following

// how long is the password? between 8 and 128 characters
//restrict length

var lengthPw = function(userInput) {
  window.prompt("Please enter a value between " + minLength + " and " + maxLength + " characters.");
  if(userInput >= minLength && userInput <= maxLength)
  {
    return window.prompt("thank you");
  }
  else
  {
    window.prompt("Please enter a value between " + minLength + " and " + maxLength + " characters.");
    lengthPw();
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
  lengthPw();
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

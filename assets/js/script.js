// Assignment code here
var placeHolder = "";
var numbers = "0123456789";
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var passwordTxt = document.getElementById("password");
var pwLength = document.getElementById("length");
var pwNumbersIncluded = document.getElementById("numbers");
var pwSpecialCharsIncluded = document.getElementById("special-characters");
var pwCapIncluded = document.getElementById("capLetters");
var pwLowIncluded = document.getElementById("lowLetters");
var generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click",() => {
  var characters = placeHolder;
  pwNumbersIncluded.checked ? (characters += numbers) : "";
  pwSpecialCharsIncluded.checked ? (characters += specialChars) : "";
  pwCapIncluded.checked ? (characters += capLetters) : "";
  pwLowIncluded.checked ? (characters += lowLetters) : "";
  passwordTxt.value = generatePassword(pwLength.value, characters);
});

var generatePassword = (pwLength, characters) => {
  var password = "";
  for (var i = 0; i < pwLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random()* characters.length)
    );
  }
  return password;
};

var copyBtn = document.getElementById("copy");

copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  window.alert("Password Copied");
});

//pseudo code

// click generate password button

//ask the following

// how long is the password? between 8 and 128 characters
//restrict length


/*
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
*/
// does pw include lowercase

//uppercase

//numbers

//special characters

//password will contain the following..

//display password

//copy password




//has to be a string
/*function generatePassword() {
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
generateBtn.addEventListener("click", writePassword); */

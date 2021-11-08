// Assignment code here
var placeHolder = "";
var numbers = "0123456789";
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var characters = placeHolder;
var minValue = 8;
var maxValue = 128;

var pwText = document.getElementById("password");
var pwLength = document.getElementById("length");
var pwNumbersIncluded = document.getElementById("numbers");
var pwSpecialCharsIncluded = document.getElementById("special-characters");
var pwCapIncluded = document.getElementById("capLetters");
var pwLowIncluded = document.getElementById("lowLetters");
var genBtn = document.getElementById("generate");
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");
var generateBtn = document.getElementById("finalgen");

function showDiv1() {
  document.getElementById("passlength").style.display = "block";
}

function showDiv2() {
  document.getElementById("incnum").style.display = "block";
}

function showDiv3() {
  document.getElementById("symbols").style.display = "block";
}

function showDiv4() {
  document.getElementById("cap").style.display = "block";
}

function showDiv5() {
  document.getElementById("low").style.display = "block";
}

function showDiv6() {
  document.getElementById("finalgen").style.display = "block";
}

genBtn.addEventListener("click", () => {
  showDiv1();
  document.getElementById("generate").style.display = "none";
});

//var userInput = parseFloat(pwLength);

d1.addEventListener("click", () => {
  var userInput = document.getElementById("length").value;
  if(isNaN(userInput) || userInput < 8 || userInput > 128) {
    alert("Please enter a valid number between 8 and 128")
  //showDiv2();
}
  else {
    showDiv2();
    //alert("Please enter a number between 8 and 128");
  }
});

d2.addEventListener("click", () => {
  showDiv3();
});
d3.addEventListener("click", () => {
  showDiv4();
});
d4.addEventListener("click", () => {
  showDiv5();
});
d5.addEventListener("click", () => {
  showDiv6();
});

var pGen = function () {
  var characters = placeHolder;
  pwNumbersIncluded.checked ? (characters += numbers) : "";
  pwSpecialCharsIncluded.checked ? (characters += specialChars) : "";
  pwCapIncluded.checked ? (characters += capLetters) : "";
  pwLowIncluded.checked ? (characters += lowLetters) : "";
  pwText.value = generatePassword(pwLength.value, characters);
};


generateBtn.addEventListener("click", () => {
  if(pwNumbersIncluded.checked == false &&
    pwSpecialCharsIncluded.checked == false &&
    pwCapIncluded.checked == false &&
    pwLowIncluded.checked == false)
    {
      alert("Please check at least one box to generate a password")
    }
    else {
  pGen();
  alert("Here is your new password!")
    }
});

var generatePassword = (pwLength, characters) => {
    var password = "";
    for (var i = 0; i < pwLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  }

var copyBtn = document.getElementById("copy");

copyBtn.addEventListener("click", () => {
  pwText.select();
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

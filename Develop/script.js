// Assignment Code
//Variable Declarations
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*()";
var numberChar = "123456789";
var chosenOne = "";

//Event listener to generate button
document.querySelector("#generate").addEventListener("click", passFun);

//The below code determines the length of the random password, requiring a value between 8-128 characters
function passFun() {
  var passLength = prompt("Please choose between 8-128 characters.");

  if (passLength > 8 && passLength < 128) {
    alert("Please continue to the next page to choose character type");
  } else {
    alert("Please choose characher length between 8-128.");
    passFun();
  }
  return passFun;
}

document.querySelector("#generate").addEventListener("click", upperFun);
function upperFun() {
  var passUpper = confirm("Would you like to inlude uppercase characters?");
}

document.querySelector("#generate").addEventListener("click", lowerFun);
function lowerFun() {
  var passLower = confirm("Would you like to inlude lowercase characters?");
}

document.querySelector("#generate").addEventListener("click", specialFun);
function specialFun() {
  var passSpecial = confirm("Would you like to inlude special characters?");
}

document.querySelector("#generate").addEventListener("click", numberFun);
function numberFun() {
  var passNumber = confirm("Would you like to inlude numbers?");
}

function generatePassword() {
  if (passUpper) {
    chosenOne += upperCase;
  }
  if (passLower) {
    chosenOne += lowerCase;
  }
  if (passSpecial) {
    chosenOne += passSpecial;
  }
  if (passNumber) {
    chosenOne += passNumber;
  }

  for(var )
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//TO DO:
//When push generate button, then prompt box appears
//prompt box that asks how many characters you want, then propmt box that asks upper case, then prompt box that asks special characters, then numbers
//password is then generated

//Define all the var needed
//Need to determine how long the password will be..do this through a function
//Does user want to include uppercase letters, numbers, special characters
//Function that combines all the above
//Finally write the password in the #password
//Add event listener at end

// var upperPrompt = confirm("Would you like to include uppercase characters?");
// var lowerPrompt = confirm("Would you like to include lowercase characters?");
// var specialPrompt = confirm("Would you like to include special characters?");
// var numberPrompt = confirm("Would you like to include numbers?");

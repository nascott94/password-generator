// Assignment Code
//Variable Declarations
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*()";
var number = "123456789";
var chosenOne = "";
var passUpper = "";
var passLower = "";
var passSpecial = "";
var passNumber = "";
// var passFinal = "";

//Event listener to generate button
document.querySelector("#generate").addEventListener("click", passFun);

//The below function determines the length of the random password, requiring a value between 8-128 characters
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
//Additon of event listener to generate further prompts
document.querySelector("#generate").addEventListener("click", charaFun);

//Function that prompts user to choose the types of characters they would like
function charaFun() {
  var passUpper = confirm("Would you like to include uppercase characters?");

  var passLower = confirm("Would you like to include lowercase characters?");

  var passSpecial = confirm("Would you like to include special characters?");

  var passNumber = confirm("Would you like to include numbers?");
}

//Function that generates the random password
function generatePassword() {
  // var passFinal = "";
  if (passUpper) {
    chosenOne += upperCase;
  }
  if (passLower) {
    chosenOne += lowerCase;
  }
  if (passSpecial) {
    chosenOne += special;
  }
  if (passNumber) {
    chosenOne += number;
  }
  // why use a for loop?
  for (var i = 0; i < length; i++) {
    passFinal += chosenOne.charAt(
      Math.floor(Math.random() * chosenOne.passLength)
    );
  }
  return console.log(chosenOne);
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

// document.querySelector("#generate").addEventListener("click", upperFun);
// function upperFun() {
//   var passUpper = confirm("Would you like to include uppercase characters?");
// }

// document.querySelector("#generate").addEventListener("click", lowerFun);
// function lowerFun() {
//   var passLower = confirm("Would you like to include lowercase characters?");
// }

// document.querySelector("#generate").addEventListener("click", specialFun);
// function specialFun() {
//   var passSpecial = confirm("Would you like to include special characters?");
// }

// document.querySelector("#generate").addEventListener("click", numberFun);
// function numberFun() {
//   var passNumber = confirm("Would you like to include numbers?");
// }

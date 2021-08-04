// Assignment Code

//Variable Declarations
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*()";
var number = "123456789";
var chosenOne;
var passUpper;
var passLower;
var passSpecial;
var passNumber;
var passLength;
var passFinal = "";

//Event listener to generate button
document.querySelector("#generate").addEventListener("click", passFun);

//The below function determines the length of the random password, requiring a value between 8-128 characters
function passFun() {
  passLength = prompt("Please choose between 8-128 characters.");

  if (passLength >= 8 && passLength <= 128) {
    alert("Please continue to the next page to choose character type");
  } else {
    alert("Please choose characher length between 8-128.");
    passFun();
  }
}
//Additon of event listener to generate further prompts
document.querySelector("#generate").addEventListener("click", charaFun);

//Function that prompts user to choose the types of characters they would like
function charaFun() {
  passUpper = confirm("Would you like to include uppercase characters?");
  // passUpper ? (chosenOne += upperCase) : null;
  passLower = confirm("Would you like to include lowercase characters?");

  passSpecial = confirm("Would you like to include special characters?");

  passNumber = confirm("Would you like to include numbers?");
}

//Function that generates the random password
function generatePassword() {
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
  } else {
  }
  console.log(chosenOne);
  for (var i = 0; i < passLength; i++) {
    passFinal += chosenOne.charAt(Math.ceil(Math.random() * chosenOne.length));
  }
  return passFinal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

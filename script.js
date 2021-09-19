//Variable Declarations
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*()";
var number = "123456789";
var userChoice = "";

function thePassword() {
  var password = passGen();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", thePassword);

function passGen() {
  var result = "";
  var length = prompt("Please pick a character number between 8 and 128");
  if (isNaN(length)) {
    alert("You must pick a character length between 8 and 128!");
    return passGen();
  }

  if (length < 8 || length > 128) {
    alert("You must pick a character length between 8 and 128!");
    return passGen();
  }

  var wantsUpperCase = confirm("Would you like to include uppercase letters?");
  var wantsLowerCase = confirm("Would you like to include lowercase letters?");
  var wantsNumbers = confirm("Would you like to include numbers?");
  var wantsSpecial = confirm("Would you like to include special charicters?");

  if (wantsUpperCase) {
    userChoice += upperCase;
  }

  if (wantsLowerCase) {
    userChoice += lowerCase;
  }

  if (wantsNumbers) {
    userChoice += number;
  }

  if (wantsSpecial) {
    userChoice += special;
  }

  for (var i = 0; i < length; i++) {
    result += userChoice.charAt(Math.floor(Math.random() * userChoice.length));
  }
  return result;
}

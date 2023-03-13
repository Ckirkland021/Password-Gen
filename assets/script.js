// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// CODE HERE

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



// generate password function

function generatePassword() {
  console.log('button clicked');

}

// diplayy password on the screen
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// return string.fromCharCode(97);


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


  //1. prompt the user for password criteria
    prompt ('How many character would you like yout password to be?');
    confirm ('Click OK to use upppercase letters??');
    confirm ('Click OK to use lowerrcase letters??');
    confirm ('Click OK to use special characters??');
    confirm ('Click OK to use numbers??');
  // Password length between 8 and 128
  // 2. Prompt user as to if they want to use lowercase, uppercase, special and numbers


  // 3. Validate the input
  // 4. generate the password

var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbersChar = '1234567890';
var specChar = '!@#$%^&*()_+-={}|[]\:";<>?,./';





// 5. Display the password on the page
  return 'Generated Password';
}

// diplayy password on the screen
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// return string.fromCharCode(97);


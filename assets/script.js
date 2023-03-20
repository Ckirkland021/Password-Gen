// Assignment code here
var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbersChar = '1234567890';
var specChar = '!@#$%^&*()_+-={}|[]\:";<>?,./';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// CODE HERE

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // diplayy password on the screen
  passwordText.value = password;

}


// generate password function

function generatePassword() {
  console.log('button clicked');


  //1. prompt the user for password criteria
  // Password length between 8 and 128
  // 2. Prompt user as to if they want to use lowercase, uppercase, special and numbers
  var pwLength = prompt('How many character would you like yout password to be?');
  if (pwLength >= 8 && pwLength <= 128) {

    var upperCom = confirm('Click OK to use upppercase letters??');
    // console.log(upperCom);
    var lowerCom = confirm('Click OK to use lowerrcase letters??');
    var scCom = confirm('Click OK to use special characters??');
    var numberCom = confirm('Click OK to use numbers??');

    if (upperCom === false && lowerCom === false && scCom === false && numberCom === false) {
      alert("Please choose at least one option.")
      location.reload()
    };

    var possChar = '';
    if (upperCom) {
      possChar += uppercaseChar;

    }

    if (lowerCom) {
      possChar += lowercaseChar;

    }

    if (scCom) {
      possChar += specChar;

    }

    if (numberCom) {
      possChar += numbersChar

    }
    var chosenChar = '';
    
    for (let i = 0; i < pwLength; i++) {
      chosenChar += possChar[]
      // get it to selecct random numbers
    }
    

console.log(possChar)
  }




  // 3. Validate the input
  // 4. generate the password








  // 5. Display the password on the page
  return 'burrito Password';
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// return string.fromCharCode(97);

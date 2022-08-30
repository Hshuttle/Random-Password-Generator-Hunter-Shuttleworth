// Assignment Code-targets generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // puts generated password in field
  passwordText.value = password;
}

// numbers, symbols & letters for password input for Prompts
var numbers = "0123456789";
var symbols = "<>?!@#$%&";
var letters = "abcdefghijklmnopqrstuvwxyz";
var uLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// User Prompts

var errorText = "Error: Please enter a valid input";

function generatePassword() {
  console.log("clicking works");

  // 1. Prompt user for password criteria
  //    a. between 8 & 128 characters
  var password = passLength();
  console.log(password);
  //    b. lowercase, uppercase, numbers, special characters
  // Lowercase
  var pLower = confirm(
    "Would you like lowercase letters to be used in your generated password? Please answer Y or N"
  );
  // Uppercase
  var pUpper = confirm(
    "Would you like uppercase letters to be used in your generated password? Please answer Y or N"
  );
  // Number
  var pNumber = confirm(
    "Would you like for numbers to be used in your generated password? Please answer Y or N"
  );
  // Special Characters
  var pChar = confirm(
    "Would you like for special characters to be used in your generated password? Please answer Y or N"
  );
  // 2. Validate input

  // 3. Generate a password based on the specified criteria

  // 4. display password to page
  return "generated password will go here";
}

function passLength() {
  var pLength = prompt(
    "Please choose your password length, please note that it must be between 8 and 128 characters"
  );
  var pLengthNum = Number(pLength);
  if (pLengthNum >= 8 && pLengthNum <= 128) {
    return "valid password length";
  } else {
    alert(errorText);
    return errorText;
  }
}

// Add event listener to generate button- calls write password function
generateBtn.addEventListener("click", writePassword);

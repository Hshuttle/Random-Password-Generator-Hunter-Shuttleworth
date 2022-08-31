// Assignment Code-targets generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // puts generated password in field
  passwordText.value = password;
}

// Variables for numbers, symbols & letters for password input for Prompts
var numbers = "0123456789";
var symbols = "<>?!@#$%&";
var letters = "abcdefghijklmnopqrstuvwxyz";
var uLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var errorText = "Error: Please enter a valid input";
var included = "";

function pUser() {
  // 1. Prompt user for password criteria
  var pLength = prompt(
    "Please choose your password length, please note that it must be between 8 and 128 characters"
  );
  // turns password length string into a number for if statement to work.
  var pLengthNum = Number(pLength);
  if (pLengthNum >= 8 && pLengthNum <= 128) {
  } else {
    alert(errorText);
  }
  // Lowercase--------------------------------
  var pLower = confirm(
    "Would you like lowercase letters to be used in your generated password?"
  );
  if (pLower == true) {
    included += letters;
  }
  // Uppercase-------------------------------
  var pUpper = confirm(
    "Would you like uppercase letters to be used in your generated password?"
  );
  if (pUpper == true) {
    included += uLetters;
  }
  // Number----------------------------------
  var pNumber = confirm(
    "Would you like for numbers to be used in your generated password?"
  );
  if (pNumber == true) {
    included += numbers;
  }
  // Special Characters----------------------
  var pChar = confirm(
    "Would you like for special characters to be used in your generated password?"
  );
  if (pChar == true) {
    included += symbols;
  }

  // object to log results of the user prompts
  var entries = {
    length: pLength,
    lowercase: pLower,
    uppercase: pUpper,
    number: pNumber,
    special: pChar,
  };
  return entries;
}

// // 2. Validate input
// function validateP() {
//   // Lowercase letters validate--------------------
//   if (pLower == true) {
//     included += letters;
//   }

//   // Uppercase letters validate--------------------
//   if (pUpper == true) {
//     included += uLetters;
//   }

//   // Number validate-------------------------------
//   if (pNumber == true) {
//     included += numbers;
//   }

//   // Special Characters validate------------------
//   if (pChar == true) {
//     included += symbols;
//   }
//   return included;
// }

// 3. Generate a password based on the specified criteria
function generatePassword() {
  var inputs = pUser();
  console.log(inputs);
  // var includedCharacters = validateP();
  console.log(included);
}

// 4. display password to page

// Add event listener to generate button- calls write password function
generateBtn.addEventListener("click", writePassword);

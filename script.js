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

function pUser() {
  // 1. Prompt user for password criteria
  var pLength = prompt(
    "Please choose your password length, please note that it must be between 8 and 128 characters"
  );
  if (!pLength) {
    return 0;
  }
  console.log(pLength);
  // turns password length string into a number for if statement to work.
  var pLengthNum = Number(pLength);
  if (pLengthNum >= 8 && pLengthNum <= 128) {
  } else {
    alert("Error: Please enter a valid input");
    return pUser();
  }
  // Lowercase--------------------------------
  var pLower = confirm(
    "Would you like lowercase letters to be used in your generated password?"
  );

  // Uppercase-------------------------------
  var pUpper = confirm(
    "Would you like uppercase letters to be used in your generated password?"
  );

  // Number----------------------------------
  var pNumber = confirm(
    "Would you like for numbers to be used in your generated password?"
  );

  // Special Characters----------------------
  var pChar = confirm(
    "Would you like for special characters to be used in your generated password?"
  );

  // object to log results of the user prompts
  var entries = {
    length: pLength,
    upper: pUpper,
    lower: pLower,
    number: pNumber,
    special: pChar,
  };
  console.log(entries);

  return entries;
}

function createPasswordBase(choices) {
  console.log("In my createPassword");
  console.log(choices);
  if (!choices.upper && !choices.lower && !choices.number && !choices.number) {
    alert("You must select at least one variable type!");
    return generatePassword();
  }
  var numbers = "0123456789";
  var symbols = "<>?!@#$%&";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var uLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordBase = "";
  if (choices.upper) passwordBase += uLetters;
  console.log(passwordBase);
  if (choices.lower) passwordBase += letters;
  console.log(passwordBase);
  if (choices.special) passwordBase += symbols;
  console.log(passwordBase);
  if (choices.number) passwordBase += numbers;
  console.log(passwordBase);
  return passwordBase;
}

// 3. Generate a password based on the specified criteria
function generatePassword() {
  var choices = pUser();
  if (!choices) return "No Password";
  var included = createPasswordBase(choices);
  console.log(choices);
  var finalPassword = "";
  for (let i = 0; i < choices.length; i++) {
    let randomIndex = Math.floor(Math.random() * included.length);
    console.log(randomIndex);
    finalPassword += included.charAt(randomIndex);
    console.log(finalPassword);
  }

  return finalPassword;
}

// 4. display password to page

// Add event listener to generate button- calls write password function
generateBtn.addEventListener("click", writePassword);

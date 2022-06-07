// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  passwordText.value = password;
}

// Character set defined
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'Z', 'W', 'X', 'Y', 'Z'];
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCase = ['!', '#', '$', '%', '&', '@', '*'];
var randomPassword = [];

// Generate password function
function generatePassword() {
  randomPassword = [];
  //promting user to input password length
  var passwordLength = prompt("Please input your password! Must be over 8 characters and not over 128 characters long!");
  if (passwordLength < 8) {
    alert('Must input 8 or more characters long!');
  } else if (passwordLength > 128) {
    alert('No more than 128 characters long');
  } else if (passwordLength === "") {
    alert('Invalid input!');
  };
  // Ask user to included lower, upper, number, and special character in the password or not
  var lower = confirm('Do you want to included lower case?')
  var upper = confirm('Do you want to included upper case?');
  var number = confirm('Do you want to included number?');
  var special = confirm('Any special character?');

  //create an argument when user choose option to included in the password.
  if (!lower && !upper && !number && !special) {
    console.log('Invalid!');
    return alert('Invalid input, please choose at least 1 option!');
  } else {
    if (lower) {
      console.log('Add lower case.');
      randomPassword = randomPassword.concat(lowerCase);
    };
    if (upper) {
      console.log('Add upper case.');
      randomPassword = randomPassword.concat(upperCase);
    };
    if (number) {
      console.log('Add number case.');
      randomPassword = randomPassword.concat(num);
    };
    if (special) {
      console.log('Add special case.');
      randomPassword = randomPassword.concat(specialCase);
    };
    console.log(randomPassword);

    //calling the function to create an random password with the user's accepted criteria
    var passwordArray = '';
    for (var i = 0; i < passwordLength; i++) {
      passwordArray += randomPassword[Math.floor(Math.random() * randomPassword.length)]
      console.log(passwordArray);
    }
    return passwordArray;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click",writePassword);

function generatePassword(){
var value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz1234567890!@#$%^&*"
var password = "";
var passwordLength = 8 - 128;
}

for (let i = 0; i < password.length; i++) {
  const element = array[i];
  
}

writePassword = function() {

  window.prompt( "choose character length atleast 8 and max 128");
  window.prompt( "do you want special characters?");
  window.prompt("do you want to use numbers?");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

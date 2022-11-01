// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmopqrstuvwxyz";
var specialCharacter = "!@#$%^&*";
var numbers = "1234567890";
// number, special, lowercase
//
var passwordLength;
var isSpecial;
var isNumber;
var isUppercase;
var isLowercase;
// upper
// lower
[[[''oo]]]

function generatePassword(){

  var password = "";

  // ask all question to users
  // 1. length
  // 2. options ( 4 questions ) using confirm.
  askQuestions();
  if (isSpecial) {
    
  }
 return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz!@#$%^&*1234567890";
}

//for (let i = 0; i < password.length; i++) {
//  const element = array[i];
  
//}

function askQuestions(){
  let length = window.prompt( "choose character length atleast 8 and max 128");
  passwordLength = parseInt(length);
  console.log (passwordLength)
  console.log (typeof passwordLength)

  if (passwordLength < 8 ) {
    alert("Invalid") 
    return;
    
  }
  if (passwordLength > 128 ) {
    alert("Invalid") 
    return;
  }

   isSpecial = confirm("Do you want to use special characters?");
   isNumber = confirm("Do you want to use numbers?");
   isLowercase = confirm("Do you want to use lowercase?");
   isUppercase = confirm("do you want to use uppercase?");

   console.log(passwordLength, isSpecial, isLowercase, isNumber, isUppercase);
}

  //window.confirm( "do you want special characters?");
  //window.confirm("do you want to use numbers?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

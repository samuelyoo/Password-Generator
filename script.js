// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//confirm / or prompt

// var isuppercas = prompt('do you want uppercas?)
// console.log(isuppercas);
//if(isuppercase ==true){
  // generate password using uppercase
//}

//passwordText.value= " this will be your password"
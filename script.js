// Assignment Code
var generateBtn = document.querySelector("#generate");
var myLowercase = 'abcdefghijklmnopqrstuvwxyz';
var myUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var myNumber = '1234567890';
var mySpecial = '!@#$%^&*()_+=-~'
var passLength = 0;
var myPassword ='';
var temppass ='';


// Write password to the #password input
function writePassword() {
  console.log("we are in the function!");
  // var password = generatePassword();


  // Define the values of password chracters
  var passwordText = document.querySelector("#password");
  
  var askLowercase = confirm('Do you want lowercase characters?');
  if(askLowercase){
    temppass += myLowercase;
  }
  console.log(askLowercase);

  var askUppercase = confirm('Do you want uppercase characters?');
  if(askUppercase){
    temppass += myUppercase;
  }
  console.log(askUppercase);

  var askNumber = confirm('Do you want numbers?');
  if(askNumber){
    temppass += myNumber;
  }
  console.log(askNumber);

  var askSpecial = confirm('Do you want special characters?');
  if(askSpecial){
    temppass += mySpecial;
  }
  console.log(passLength);

  passLength = prompt('How many charachters do you wnat? (choose bettween 8 and 128)')
  
  // Assign passLength to Number from String
  passLength = Number(passLength);

  // console.log(askLowercase);
  // console.log(askUppercase);
  // console.log(askNumber);
  // console.log(askSpecial);
  // console.log(passLength);

  if(passLength >=8 && passLength <=128){
    for(let i=0; i<passLength; i++){
    myPassword += temppass[Math.floor(Math.random(passLength)*temppass.length)];
    } 
  }
  passwordText.value = myPassword;

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



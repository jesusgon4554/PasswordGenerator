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

//Prompt
prompt("Welcome to Random Password Generator! Would you like to generate a password?");
var length = prompt("How long would you like your password to be?");
var number = prompt("Would you like numbers in your password? yes or no?");
var lower = prompt("Would you like lowercase letters in your password? yes or no?");
var upper = prompt("Would you like uppercase letters in your password? yes or no?");
var special = prompt("Would you like special characters in your password? yes or no?");

// Password Characters
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K",            
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCase = ["!","@","#","$","%","^","&","*","(",")","-","=","_","+"];

//password
var passwordLength = length;
var passwordCharacters = [];
var password = [];

//object
var passwordConfiguration = {
  hasSpecial: special,
  hasNumeric: number,
  hasLower: lower,
  hasUpper: upper
};

//functions

function generatePassword(){
  if(lower === "yes"){
    passwordCharacters.push(lowerCase);
    password.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
  }else(null)


  if(numbers === "yes"){
    passwordCharacters.push(numbers);
    password.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }else(null)

  if(special === "yes"){
    passwordCharacters.push(specialCase);
    password.push(specialCase[Math.floor(Math.random() * specialCase.length)]);
  }else(null)

  if(upper === "yes"){
    passwordCharacters.push(upperCase);
    password.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
    }else(null)

    console.log(password);
    console.log(passwordCharacters);
}
generatePassword();
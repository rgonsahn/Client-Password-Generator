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
function generatePassword() {
  var length = prompt("Please enter password length (8 - 128 characters)");
  var possibleCharacters = []; 
  var password2 = "";
  var randomIndex;
  var randomChar;

  //start - handle lowercase
  var hasLowercase = confirm("include lower case letters?");
  if (hasLowercase){
    var lowercases = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");  //[a, b, c, d, ...]
    possibleCharacters = possibleCharacters.concat(lowercases);
    randomIndex = Math.floor(Math.random() * lowercases.length); //0.1234 * 100 = 12.34
    randomChar = lowercases[randomIndex];
    password2 = password2 + randomChar;
  }

    //end - handle lowercase
    var hasUppercase = confirm("include upper case letters?");
  if (hasUppercase){
    var uppercases = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(","); //[a, b, c, d, ...]
    possibleCharacters = possibleCharacters.concat(uppercases);
    randomIndex = Math.floor(Math.random() * uppercases.length); //0.1234 * 100 = 12.34
    randomChar = uppercases[randomIndex];
    password2 = password2 + randomChar;
  }

      //is there a faster way to add an array of numbers? // am I adding 52 numbers here? 
    
      var hasNumbers =  confirm("include numbers?");
      if (hasNumbers){
      var hasNumbers = "1,2,3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18.19.20,21,22,23,24,25,26,27,28,29,30,".split(",");
      possibleCharacters = possibleCharacters.concat(hasNumbers);
      randomIndex = Math.floor(Math.random() * hasNumbers.length); //0.1234 * 100 = 12.34
      randomChar = hasNumbers[randomIndex];
      password2 = password2 + randomChar;
     }

     var hasSpecialcharacters =  confirm("include special characters?");
     if (hasSpecialcharacters){
     var hasSpecialcharacters = "1,2,3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18.19.20,21,22,23,24,25,26,27,28,29,30,".split(",");
     possibleCharacters = possibleCharacters.concat(hasSpecialcharacters);
     randomIndex = Math.floor(Math.random() * hasSpecialcharacters.length); //0.1234 * 100 = 12.34
     randomChar = hasSpecialcharacters[randomIndex];
     password2 = password2 + randomChar;








     





    return password2;

  }
    // will add block of code for special characters tomorrow
    // will also attempt to do for loop
    //start - handle uppercase

    //end - handle uppercase


    //do for loop to fill in rest of characters in password2


  }

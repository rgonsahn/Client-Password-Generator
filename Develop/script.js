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
  var passwordLength = prompt("Please enter password length (8 - 128 characters)");
  var possibleCharacters = []; 
  var password2 = "";
  var randomIndex;
  var randomChar;

  var hasLowercase = confirm("include lower case letters?");
  if (hasLowercase){
    var lowercases = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");  //[a, b, c, d, ...]
    possibleCharacters = possibleCharacters.concat(lowercases);
    randomIndex = Math.floor(Math.random() * lowercases.length); //0.1234 * 100 = 12.34
    randomChar = lowercases[randomIndex];
    password2 = password2 + randomChar;
  }

    var hasUppercase = confirm("include upper case letters?");
  if (hasUppercase){
    var uppercases = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(","); //[a, b, c, d, ...]
    possibleCharacters = possibleCharacters.concat(uppercases);
    randomIndex = Math.floor(Math.random() * uppercases.length); //0.1234 * 100 = 12.34
    randomChar = uppercases[randomIndex];
    password2 = password2 + randomChar;
  }

      
    
      var hasNumbers =  confirm("include numbers?");
      if (hasNumbers){
      var numbersArray = "0,1,2,3,3,4,5,6,7,8,9".split(",");
      possibleCharacters = possibleCharacters.concat(numbersArray);
      randomIndex = Math.floor(Math.random() * numbersArray.length); //0.1234 * 100 = 12.34
      randomChar = numbersArray[randomIndex];
      password2 = password2 + randomChar;
     }

     var hasSpecialcharacters =  confirm("include special characters?");
     if (hasSpecialcharacters){
     var specialCharacters = "!,@,#,$,%,^,&,*,(,),+".split(",");
     possibleCharacters = possibleCharacters.concat(specialCharacters);
     randomIndex = Math.floor(Math.random() * specialCharacters.length); //0.1234 * 100 = 12.34
     randomChar = specialCharacters[randomIndex];
     password2 = password2 + randomChar;
     }

     for (var i = password2.length; i < passwordLength; i++) { 
      randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      randomChar = possibleCharacters[randomIndex]; 
      password2 = password2 + randomChar;
    }




    return password2;


    
  }

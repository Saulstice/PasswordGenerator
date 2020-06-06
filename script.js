// Assignment Code
var generateBtn = document.querySelector("#generate");

// Initializing global variables for functions to create password
var options = new Array();
var pwArray = new Array();
var pw = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  checkLength();
  getOptions();

  var password = generatePassword();

  //console password array and custom options array
  console.log(pwArray);
  console.log(options);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Function to generate password
function generatePassword() {
  //reset password so on each click new one can be created
  pw = "";

  //loop to randomly select each character based on user preferences
  for (var i = 0; i < pwArray.length; i++) {
    random = options[Math.floor(Math.random() * options.length)];
    if (random === "lower") {
      pwArray[i] = addLower();
    }
    if (random === "upper") {
      pwArray[i] = addUpper();
    }
    if (random === "special") {
      pwArray[i] = addSpecial();
    }
    if (random === "num") {
      pwArray[i] = addNum();
    }
  }

  //loop to add each random character to password string for display
  for (var i =0; i<pwArray.length; i++) {
    pw += pwArray[i];
  }
  return pw;
}

//function that selects random lowercase character
function addLower() {
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  return characters.charAt(Math.floor(Math.random() * charactersLength));
}

//function that selects random uppercase character
function addUpper() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  return characters.charAt(Math.floor(Math.random() * charactersLength));
}

//function that selects random number
function addNum() {
  var characters = '0123456789'
  var charactersLength = characters.length;
  return characters.charAt(Math.floor(Math.random() * charactersLength));
}

//function that selects random special character
function addSpecial() {
  var characters = "!\'\"\&#$%*+,-./:;<=>?@[]\\^_`{}|~"
  var charactersLength = characters.length;
  return characters.charAt(Math.floor(Math.random() * charactersLength));
}

//function that calls alerts to log user's preferences
function getOptions() {
  askLower();
  askUpper();
  askNumbers();
  askSpecial();
  return options;
}

  //If user wants lowercase, add lowercase function to options array
  function askLower() {
    var haveLower = prompt("Do you want to include lowercase characters? Enter yes or no.");
    if (haveLower === "yes") {
      options.push("lower");
      alert("Ok, your password will include lowercase characters.");
    } else if (haveLower === "no") {
      alert("Ok, your password will not include lowercase characters.");
    } else {
      alert("Please type \"yes\" or \"no\"");
      askLower();
    }
    return options;
  }
  //If user wants uppercase, add uppercase function to options array
  function askUpper() {
    var haveUpper = prompt("Do you want to include uppercase characters? Enter yes or no.");
    if (haveUpper === "yes") {
      options.push("upper");
      alert("Ok, your password will include uppercase characters.");
    }else if (haveUpper === "no") {
      alert("Ok, your password will not include uppercase characters.");
    } else {
      alert("Please type \"yes\" or \"no\"");
      askUpper();
    }
    return options;
  }


// if user wants numbers, add numbers function to options array
  function askNumbers() {
    var haveNumbers= prompt("Do you want to include numbers? Enter yes or no.");
    if (haveNumbers === "yes") {
      options.push("num");
      alert("Ok, your password will include numbers.");
    } else if (haveNumbers === "no") {
      alert("Ok, your password will not include numbers.");
    } else {
      alert("Please type \"yes\" or \"no\"");
      askNumbers();
    }
    return options;
}

  //If user wants specials, add specials function to options array
  function askSpecial() {
    var haveSpecials = prompt("Do you want to include special characters? Enter yes or no.");
    if (haveSpecials === "yes") {
      options.push("special");
      alert("Ok, your password will include special characters.");
    } else if (haveSpecials === "no") {
      alert("Ok, your password will not include special characters.");
    } else {
      alert("Please type \"yes\" or \"no\"");
      askSpecial();
    }
    return options;
  }
  
  

// Function to take input for password length and validate it; returns password array with selected length
function checkLength() {
  var pwLength = Number(prompt("How long do you want your password to be? Number must be at least 8 and no more than 128."));
  if (pwLength>Number(7) && pwLength<Number(129)) {
    alert("Okay, your password will be " + pwLength + " characters long.");
  } else {
    alert("Please enter a number that is at least 8 and no more than 128.");
    checkLength();
  }
  return pwArray = new Array(pwLength);
}

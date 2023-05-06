// Assignment no 1:


// Question no 1

var ZakatPercentge = 0.025;
var userInput = parseInt(prompt("Enter your Amount"));
var result = ZakatPercentge*userInput;
alert(`Your Zakat value is ${result}`);



// Question no 2

var familyMembers = prompt("Enter the total number of family members:");

// prompt the user to choose a fitrah method
var method = prompt("Choose a fitrah method:\n1. $10 per person\n2. $15 per person\n3. Custom amount");

// calculate the fitrah amount based on the selected method and the number of family members
var price = 0;
if (method === "1") {
  price = 10;
} else if (method === "2") {
  price = 15;
} else if (method === "3") {
  price = prompt("Enter the custom amount:");
}
var fitrahAmount = price * familyMembers;

// display the calculated fitrah amount using an alert message
alert("The fitrah amount for " + familyMembers + " family members using method " + method + " is $" + fitrahAmount + ".");


// Question no 3

var SecretNumber = (Math.floor(Math.random() * 10) + 1)
var guess = parseInt(prompt("Enter the number"))

if(SecretNumber==guess){
    alert("Congratulations! You guessed the secret number")
}
else{
    if(guess>SecretNumber){
        alert("Your guess is high")
    }
    else{
        alert("Your guess is low")
    }
}

// Question no 4

var username = prompt("Enter your Name")
alert(username.charAt(0).toUpperCase()+username.slice(1))



// Question no 5


var contactNumbers = [];
var contactNames = [];

// loop to prompt user to enter contact number and name and push them to respective arrays
for (var i = 0; i < 5; i++) {
  var number = prompt("Enter contact number:");
  var name = prompt("Enter contact name:");
  contactNumbers.push(number);
  contactNames.push(name);
}

for (var i = 0; i < contactNumbers.length; i++) {
  console.log(`Contact Number: ${contactNumbers[i]}, Contact Name: ${contactNames[i]}`);
}


// Question no 6

var products = ["apple", "banana", "cherry", "dates", "eggplant"];

var indexToRemove = parseInt(prompt(`Enter the position (0 - ${products.length - 1}) of the item you want to remove:`));

var removedItem = products.shift(indexToRemove, 1)[0];

console.log(`The item removed from the array is ${removedItem}`);

console.log(`The remaining items in the array are [${products}]`);
console.log(`There are ${products.length} items remaining in the array.`);




// Question no 7

var nationality = prompt("What is your nationality?");
var gender = prompt("What is your gender?");
var age = parseInt(prompt("What is your age?"));

// check if the person is Pakistani or Indian
if (nationality.toLowerCase() === "pakistani" || nationality.toLowerCase() === "indian") {
  // check their age and gender
  if (gender.toLowerCase() === "male" && age >= 18) {
    console.log("You are eligible to vote.");
  } else if (gender.toLowerCase() === "female" && age >= 18) {
    var married = prompt("Are you married? (yes/no)");
    if (married.toLowerCase() === "yes") {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible to vote.");
    }
  } else {
    console.log("You are not eligible to vote.");
  }
} else {
  console.log("You are not eligible to vote.");
}


// Question no 8

var worldCupSquad = ["Babar Azam", "Fakhar Zaman", "Haider Ali", "Mohammad Rizwan", "Shadab Khan", "Imad Wasim", "Faheem Ashraf", "Shaheen Afridi", "Hasan Ali", "Haris Rauf", "Mohammad Hasnain", "Sarfaraz Ahmed", "Shoaib Malik", "Mohammad Nawaz", "Usman Qadir"];

var finalTeamPlayers = [];

for (var i = 0; i < 11; i++) {
  finalTeamPlayers.push(worldCupSquad[i]);
}

console.log(finalTeamPlayers); 

// ----------- Question no 01 ---- Make a funciton that checks whether the current year is a leap year or not


function checkYear(currentYear) {
    if (currentYear % 4 === 0) {
        if (currentYear % 100 === 0) {
            if (currentYear % 400 === 0) {
                return "This is leap year";
            }
            else {
                return "Not a leap year";
            }
        }
        else {
            return "This is leap year";
        }
    }
    else {
        return "This is not a leap year";
    }
}





// ----- Question no 2 ------ Write a function that returns the leap years of upcoming next 10 years


function nextTenLeapYears() {
    const currentYear = new Date().getFullYear();
    const leapYears = [];
    let year = currentYear;
    for (let i=0 ;leapYears.length < 3; i++) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYears.push(year);
      }
      year++;
    }
    return leapYears;
  }
  

console.log(nextTenLeapYears());  





// -------------- Task no -3 -------- Write a function that generates OTP

function generateOTP() {
  let OTP = "";

  for (let i=0; i<3; i++) {
    OTP+= Math.floor(Math.random()*10);
  }
  return OTP;
}

console.log(generateOTP());




// Task no 4 -------------- Convert string into capital case

function toCapital(text) {
  
  let splitString = text.split(" ");
  for (let i=0; i<splitString.length; i++) {
    splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substr(1);  
  }
  splitString = splitString.join(" ")+".";
  
  return splitString;
}

let a= "ameen hamza";
console.log(toCapital(a));




// Task no 5 ----------------- Calculate user age -------

let date = new Date();
let currentYear = date.getFullYear();

let userBirthYear = +prompt("Enter your birth year :");
let userAge = currentYear - userBirthYear;
console.log("Your age is :"+userAge);

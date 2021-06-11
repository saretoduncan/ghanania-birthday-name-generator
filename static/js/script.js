//male names according to the day of the week
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", " Yaw", "Kofi", "Kwame"];
//...//
//female names according to the day of the week
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//...//
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] //Days of the week
var noOfDays = 7 //number of days in a week
  //total Days Of Months in a year
const totalDaysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  //...//
var monthCode = [] //month code according to Gregian calendar system

var monthCodeGenerator = () => {
    let mod = 0;
    for (let i = 0; i < totalDaysOfMonths.length; i++) {
      monthCode.push(mod);
      mod = (mod + totalDaysOfMonths[i]) % noOfDays

    }
    return mod;
  } //month Code Generator
monthCodeGenerator();
var centuryCode = century => {
    let code;
    if (century % 4 === 0) {
      code = 6;
    } else if (century === 1 || (century - 1) % 4 === 0) {
      code = 4;
    } else if ((century + 1) % 4 === 0) {
      code = 0;
    } else if (century === 2 || (century / 2) % 2 !== 0) {
      code = 2;
    }
    return code;
  } // century code according to Gregian calendar system

//date of birth data collection function
var dataCollection = (day, month, year) => {
  let dd = day;
  let mm = monthCode[month - 1]; //month code
  let cc = centuryCode(Math.floor(year / 100)); // century code
  let yy = parseInt(year.slice(-2));
  let dayOfBirth = (dd + mm + cc + yy + Math.floor(yy / 4)) % 7;
  return daysOfTheWeek[dayOfBirth];
}
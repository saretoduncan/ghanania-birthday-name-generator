//male names according to the day of the week
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", " Yaw", "Kofi", "Kwame"];

//female names according to the day of the week
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] //Days of the week
var noOfDays = 7 //number of days in a week
const totalDaysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] //total Days Of Months in a year
var monthCode = [] //month code according to Gregian calendar
var monthCodeGenerator = () => {
    let mod = 0;
    for (let i = 0; i < totalDaysOfMonths.length; i++) {
      monthCode.push(mod);
      mod = (mod + totalDaysOfMonths[i]) % noOfDays

    }
    return mod;
  } //month Code Generator
monthCodeGenerator();

//date of birth data collection function

var dataCollection = (day, month, year) => {
  let dd = day;
  let mm = month;
  let cc = Math.floor(year / 100);
  let yy = parseInt(year.slice(-2));
}
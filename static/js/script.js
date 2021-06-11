var dataCollection = (day, month, year) => {
  let dd = day;
  let mm = month;
  let cc = Math.floor(year / 100);
  let yy = parseInt(year.slice(-2));
  console.log(`${dd}, ${mm}, ${cc}, ${yy}`)
}
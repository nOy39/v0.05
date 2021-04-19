let parseData = [];
let monthData = [];
let calcSum = new Object();

et hoursSum = 0;
let daysSum = 0;

/*Function for parse table from DOM. Finded data pushing to array parseData */
function parseTable(){
  let tr_test = Array.prototype.slice
                .call(document.getElementsByTagName('tr'));

  for (let i = 0; i < tr_test.length; i++) {
    if (tr_test[i].dataset.id > 0) {
      let obj = new Object();
      let arr = Array.prototype.slice.call(tr_test[i].childNodes)
      for (let j = 0; j < arr.length; j++) {
        let key = arr[j].id.substring(4);
        let value = arr[j].innerText;
        if (key === "date") {
          value = value.substring(0,8)
        }
        obj[key] = value;
      }
      parseData.push(obj)
    }
  }
}
/*Function for searching user month.
Inner data: array - parsed data array.
            month - month in String format*/
function findWorking(unsortedParseArray, month) {
  for (let i = 0; i < unsortedParseArray.length; i++) {
    if (Number(unsortedParseArray[i].date.substring(3,5)) === Number(month)) {
        monthData.push(unsortedParseArray[i])}
        else {
          console.log(i + " element is not searching month");}
        }
      }

function calculate(sortedMonthArray) {
  for (let i = 0; i<sortedMonthArray.length; i++) {
            hoursSum = hoursSum + Number(sortedMonthArray[i].rated) +
                Number(sortedMonthArray[i].taxi);
            daysSum = ++daysSum;
    }
  calcSum.totalHours = hoursSum;
  calcSum.totalDays = daysSum;
  return calcSum
}

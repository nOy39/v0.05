function clicked(){
  console.log("popup.js running")
}
var msg = {
  "action": "fromPopup",
  "head": "Popup message",
  "status": "Response",
  "userinput": null
}

var calculation = {
  "month" : "",
  "hours" : 0,
  "days" :0
}
var arr = [];
var month;
// function calculate(sortedMonthArray) {
//   for (let i = 0; i<sortedMonthArray.length; i++) {
//             hoursSum = hoursSum + Number(sortedMonthArray[i].rated) +
//                 Number(sortedMonthArray[i].taxi);
//             daysSum = ++daysSum;
//     }
//   calcSum.totalHours = hoursSum;
//   calcSum.totalDays = daysSum;
//   return calcSum
// }
function calculateHours(array, month) {
  calculation.hours = 0;
  calculation.days = 0;
  for (var i = 0; i < array[0].isActive.length; i++) {
    if (Number(array[0].isActive[i].date.slice(3,5)) == Number(month)) {

      calculation.hours = calculation.hours +
      Number(array[0].isActive[i].rated) +
      Number(array[0].isActive[i].taxi);
      calculation.days = ++calculation.days

    }
    console.log(array[0].isActive[i]);
}}
document.getElementById("butShow").addEventListener('click', () => {
  chrome.tabs.getSelected(null, function (tab) {
    console.log(tab);
    console.log(msg);
  });
});

document.getElementById("butSend").addEventListener('click', () => {
  chrome.tabs.getSelected(null, function (tab) {
    month = document.getElementById('userinput').value;
    msg.userinput = month
    if (msg.userinput != 0) {
      chrome.tabs.sendMessage(tab.id, msg)
    } else {
      document.getElementById('user_responce').innerHTML = "You need select month"
    }
  });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

  arr = [];
  // console.log(message);
  arr.push(message);
  arr = arr.flat();
  calculateHours(arr, month)
  document.getElementById('user_responce').innerHTML = calculation.hours;
  document.getElementById('active_data').innerHTML = calculation.days;
    sendResponse({
        data: "I am fine, thank you. How is life in the background?"
    });
});

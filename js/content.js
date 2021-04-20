console.log("content vs running");

let test = {
  "action": "fromContent",
  "data": "Hello Popup",
  "message": "JSON"
};

// let fromPopup = {};
// let toPopup = {};
let popup = false;
let parseData = [];

function parseTable() {
  parseData = [];
  let array = [];
  const isActive = "ftab_place";
  const isClose = "ftab_place_stat"
  parseTableToArr(isActive, array);
  parseTableToArr(isClose, array);
}

function parseTableToArr(id, array) {
  array = [];
  let arrObj = new Object();
  let tr_test = document.getElementById(id);
  let elems = tr_test.getElementsByTagName('tr');
  for (let i = 0; i < elems.length; i++) {
      if (elems[i].dataset.id > 0) {
          let obj = new Object();
          let arr = Array.prototype.slice.call(elems[i].childNodes)
          let keyDaysType = "weekend";
          let valueDaysType = elems[i].className === "tr_red"
          obj[keyDaysType] = valueDaysType
          for (let j = 0; j < arr.length; j++) {
              let key = arr[j].id.substring(4);
              let value = arr[j].innerText;
              if (key === "date") {
                  value = value.substring(0,8)
                  }
              obj[key] = value;
              }
          array.push(obj)
          }

          arrObj[id == "ftab_place" ? "isActive" : "isClosed"] = array
    }
    parseData.push(arrObj)
}

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
  // if (message.action == 'fromPopup' && message.userinput != 0) {
  //   popup = !popup
    parseTable();
    // findWorking(parseData, message.userinput)
    // calculate()
    chrome.runtime.sendMessage(parseData, function (response) {
      console.dir(response);
      console.log(parseData);
    });
  // }
  console.log(popup);
    fromPopup = message
    //console.log(message);
    console.log(fromPopup);
    console.log(parseData);
}

function sendToPopup() {
  chrome.runtime.sendMessage({
                      data: "Hello popup, how are you"
                  }, function (response) {
                      console.dir(response);
                  });
}

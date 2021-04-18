console.log("content vs running");

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
  //if (message.action === "fromPopup") {
    console.log(message);
//  }

}

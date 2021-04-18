function clicked(){
  console.log("popup.js running")
}
var msg = {
  "action": "fromPopup",
  "head": "Popup message",
  "status": "Response"
}
function sendToContent(msg) {

}


document.getElementById("butShow").addEventListener('click', () => {
  chrome.tabs.getSelected(null, function (tab) {
    console.log(tab);
  });
});

document.getElementById("butSend").addEventListener('click', () => {
  chrome.tabs.getSelected(null, function (tab) {
    chrome.tabs.sendMessage(tab.id, msg)
  });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message);
    sendResponse({
        data: "I am fine, thank you. How is life in the background?"
    });
});

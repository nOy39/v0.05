function clicked(){
  console.log("popup.js running")
}
var msg = {
  "action": "fromPopup",
  "head": "Popup message",
  "status": "Response",
  "userinput": null
}

document.getElementById("butShow").addEventListener('click', () => {
  chrome.tabs.getSelected(null, function (tab) {
    console.log(tab);
    console.log(msg);
  });
});

document.getElementById("butSend").addEventListener('click', () => {
  chrome.tabs.getSelected(null, function (tab) {
    msg.userinput = document.getElementById('userinput').value;
    if (msg.userinput != 0) {
      chrome.tabs.sendMessage(tab.id, msg)
    } else {
      document.getElementById('user_responce').innerHTML = "You need select month"
    }
  });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message);
  document.getElementById('user_responce').innerHTML = message.data
    sendResponse({
        data: "I am fine, thank you. How is life in the background?"
    });
});

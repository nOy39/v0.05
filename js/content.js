console.log("content vs running");
var popup = false;
chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
  if (message.action == 'fromPopup') {
    chrome.runtime.sendMessage({
                        data: "Hello popup, how are you"
                    }, function (response) {
                        console.dir(response);
                    });
  }
    console.log(message.action);
    console.log(popup);
}

if (popup) {
  sendToPopup();
}
function sendToPopup() {
  chrome.runtime.sendMessage({
                      data: "Hello popup, how are you"
                  }, function (response) {
                      console.dir(response);
                  });
}

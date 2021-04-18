function clicked(){
  console.log("popup.js running")
}

// var  bgp = chrome.extension.getBackgroundPage()
// var arr = []; // the array

document.getElementById("butShow").addEventListener('click', clicked);
//
// function addItems(){
//         arr.push(input.value); // add textbox value to array
//         input.value = ''; // clear textbox value
// };
// function addItems() {
//   arr.push(tbinput.value); // add textbox value to array
//   tbinput.value = ''; // clear textbox value
// };

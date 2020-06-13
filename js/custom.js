

var btn = document.querySelector(".sai");
var getText = document.querySelector(".getText");
var content = document.querySelector(".getcontent");
var editorContent = document.querySelector(".artboard-overlay");

// btn.addEventListener("click", function() {
//   alert()
//   var s = editorContent.innerHTML;
//   content.style.display = "block";
//   content.textContent = s;
// });

// getText.addEventListener("click", function() {
//   const old = editorContent.textContent;
//   content.style.display = "block";
//   content.textContent = old;
// });

function link() {
  var url = prompt("Enter the URL");
  document.execCommand("createLink", false, url);
}

function copy() {
  document.execCommand("copy", false, "");
}

function changeColor(that) {
  var color = that.value
  document.execCommand("foreColor", false, color);
}

function changeSizeText(that){
  var size = that.value +'px'
  console.log(size)
  document.execCommand('fontSize', false, size)
}

function printPDF(divID) {
  //Get the HTML of div
  var divElements = document.getElementById(divID).innerHTML;
  //Get the HTML of whole page
  var oldPage = document.body.innerHTML;

  //Reset the page's HTML with div's HTML only
  document.body.innerHTML = 
    "<html><head><title></title></head><body>" + 
    divElements + "</body>";

  //Print Page
  window.print();

  //Restore orignal HTML
  document.body.innerHTML = oldPage;

}


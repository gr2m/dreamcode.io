window.addEventListener('input', function(event) {
  var el    = event.target;
  var key   = el.getAttribute('title')
  var value = el.innerText
  
  localStorage.setItem(key, value)
}, false);

var elH1 = document.getElementsByTagName('h1')[0];
var elP = document.getElementsByTagName('p')[0];
var elCode = document.getElementsByTagName('code')[0];

var valH1 = localStorage.getItem("title");
var valP = localStorage.getItem("description");
var valCode = localStorage.getItem("code");

if (valH1) elH1.innerText = valH1;
if (valP) elP.innerText = valP;
if (valCode) elCode.innerText = valCode;
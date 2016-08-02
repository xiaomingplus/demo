// var help = document.querySelector("#help");
// var fields = document.querySelectorAll("input");
// for (var i = 0; i < fields.length; i++) {
//     fields[i].addEventListener("focus", function(event) {
//         var text = event.target.getAttribute("data-help");
//         help.textContent = text;
//     });
//     fields[i].addEventListener("blur", function(event) {
//         help.textContent = "";
//     });
// }


var text = document.querySelector("input");
var output = document.querySelector("#length");
text.addEventListener("input",function(){
  output.textContent = text.value.length;
});

localStorage.setItem("username","marijn");
console.log(localStorage.getItem("username"));//marijn
localStorage.removeItem("username")

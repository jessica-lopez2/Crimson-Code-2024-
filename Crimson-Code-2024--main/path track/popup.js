document.addEventListener("DOMContentLoaded", runFunction);
console.log("DOM is loaded!")
function runFunction() {
let button = document.getElementById("button1");

function clickFunction() {
    button.addEventListener("click", clickFunction);
}
}
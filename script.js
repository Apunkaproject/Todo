// dark mode and light mode 
var mode_switch = document.getElementById("mode_switch");
mode_switch.addEventListener("click",function()
{
    document.body.classList.toggle("light");
    console.log("hello");
});
// popup 
var modal = document.getElementById("popup");
var btn = document.getElementById("popbtn");
var close = document.getElementById("close"); 
btn.onclick = function() {
  modal.style.display = "block";
}
close.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
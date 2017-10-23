function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function howtodp() {
    document.getElementById("howtodp").classList.toggle("show");
}
function aboutdp() {
    document.getElementById("aboutdp").classList.toggle("show");
}

function headlinesdp() {
    document.getElementById("headlinesdp").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropa')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

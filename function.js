function transition() {
  var divtran = document.getElementById('mobile_menu');
  var menuDrop = document.querySelectorAll(".mobilemenu");
  var menuOpen = false;
    if (divtran.style.height == '100vh') {
      divtran.style.height = '0vh';
      menuOpen = false;
    } else {
      divtran.style.height = '100vh'
      menuOpen = true;
    }
    for(var i=0;i<menuDrop.length;i++){
      if(menuOpen) {
        menuDrop[i].classList.add("act");
      } else {
        menuDrop[i].classList.remove("act");
      }
    }
}

$(document).ready(function() {
$(".mobile_menu").on("click", function() {
  $(".mobilemenu").slideToggle();
}
}

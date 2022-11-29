function showMenu() {
  var topNav = document.getElementById('navegacion-top');
  if (topNav.className === "navegacion") {
    topNav.className += " show";
  } else {
    topNav.className = "navegacion";
  }
}

function toMenu() {
  location.href = "menu.html";
}

function toCombos() {
  location.href = "combos.html";
}

function toTamaños() {
  location.href = "tamaños.html";
}

function toExtras() {
  location.href = "extras.html";
}

function showMenu() {
  var topNav = document.getElementById('navegacion-top');
  if (topNav.className === "navegacion") {
    topNav.className += " show";
  } else {
    topNav.className = "navegacion";
  }
}

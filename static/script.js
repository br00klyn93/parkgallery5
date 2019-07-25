var isChecked = false;

function fadeRight(hello) {
  $(hello).toggleClass("animated");
  $(hello).toggleClass("fadeIn");
}

function recClick() {
  if(isChecked) {
    $("#mobile-drop").removeClass("active");
    $("#mobile-items").removeClass("active");

    console.log("Unchecked");
    isChecked = false;
  } else {
    $("#mobile-drop").addClass("active");
    $("#mobile-items").addClass("active");

    console.log("checked");
    isChecked = true;
  }
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function closeMenu() {
  $("#menu_checkbox").prop("checked", false);
  $("#mobile-drop").removeClass("active");
  $("#mobile-items").removeClass("active");
  isChecked = false;
}

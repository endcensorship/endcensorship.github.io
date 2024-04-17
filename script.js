console.log(visualViewport);

function myFunction() {
  var x = document.getElementById("navLinks");
  var y = document.getElementById("icon");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.display = "flex";
  } else {
    x.style.display = "flex";
  }
}

function highlight() {
  var x = document.getElementById("iconImg");
  if(x.getAttribute("src") == "hb-icon.png") {
    x.setAttribute("src", "hb-icon-2.png");
  } else {
    x.setAttribute("src", "hb-icon.png");
  }
}
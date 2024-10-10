window.addEventListener("mousemove", function (e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  let width = window.innerWidth;
  let height = window.innerHeight;

  let moveX = (mouseX - width / 2) / width;
  let moveY = (mouseY - height / 2) / height;

  let background = document.getElementById("Background");
  background.style.transform =
    "translate(" + moveX * 10 + "px, " + moveY * 10 + "px)";

  let stars2 = document.getElementById("Stars2");
  stars2.style.transform =
    "translate(" + moveX * 20 + "px, " + moveY * 20 + "px)";

  let stars = document.getElementById("Stars");
  stars.style.transform =
    "translate(" + moveX * 30 + "px, " + moveY * 30 + "px)";

  let clouds2 = document.getElementById("Clouds2");
  clouds2.style.transform =
    "translate(" + moveX * 40 + "px, " + moveY * 40 + "px)";

  let clouds = document.getElementById("Clouds");
  clouds.style.transform =
    "translate(" + moveX * 50 + "px, " + moveY * 50 + "px)";

  let sun = document.getElementById("Sun");
  sun.style.transform = "translate(" + moveX * 60 + "px, " + moveY * 60 + "px)";

  let mountains = document.getElementById("Mountains");
  mountains.style.transform =
    "translate(" + moveX * 70 + "px, " + moveY * 70 + "px)";

  let layer4 = document.getElementById("Layer4");
  layer4.style.transform =
    "translate(" + moveX * 80 + "px, " + moveY * 80 + "px)";

  let layer3 = document.getElementById("Layer3");
  layer3.style.transform =
    "translate(" + moveX * 90 + "px, " + moveY * 90 + "px)";

  let layer2 = document.getElementById("Layer2");
  layer2.style.transform =
    "translate(" + moveX * 100 + "px, " + moveY * 100 + "px)";
  let layer1 = document.getElementById("Layer1");
  layer1.style.transform =
    "translate(" + moveX * 110 + "px, " + moveY * 110 + "px)";
});

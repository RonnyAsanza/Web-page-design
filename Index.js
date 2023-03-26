/* ROTAR IMAGEN BODY */
const rotatingImage = document.getElementById("rotating-image");

function rotateImage() {
  rotatingImage.classList.add("rotate-3s-stop-5s");
  rotatingImage.classList.remove("stop");
}

function stopImageRotation() {
  rotatingImage.classList.add("stop");
  rotatingImage.classList.remove("rotate-3s-stop-5s");
}

rotateImage();
setInterval(function() {
  stopImageRotation();
  setTimeout(function() {
    rotateImage();
  }, 5000);
}, 10000);
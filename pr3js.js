 
var explosionSound = document.getElementById("explosion-sound");
var metaBalls = document.querySelectorAll(".meta");

metaBalls.forEach(function(meta) {
  meta.addEventListener("mouseenter", function() {
    explosionSound.currentTime = 0;
    explosionSound.play();
  });

  meta.addEventListener("mouseleave", function() {
    explosionSound.pause();
    explosionSound.currentTime = 0;
  });
});
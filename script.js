const envelope = document.getElementById("envelope");
const overlay = document.getElementById("overlay");
const music = document.getElementById("music");

music.loop = true;

let hasPlayed = false;

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  // reproducir música solo una vez
  if (!hasPlayed) {
    music.volume = 0.2;
    music.play().catch(() => {});
    hasPlayed = true;
  }

  setTimeout(() => {
    overlay.classList.add("show");
  }, 700);
});

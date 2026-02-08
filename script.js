const envelope = document.getElementById("envelope");
const overlay = document.getElementById("overlay");
const music = document.getElementById("music");

music.loop = true;

let hasPlayed = false;

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  // reproducir música solo una vez
  if (!hasPlayed) {
    music.volume = 0.1;
    music.play().catch(() => {});
    hasPlayed = true;
  }

  setTimeout(() => {
    overlay.classList.add("show");
  }, 700);
});

// cerrar carta
overlay.addEventListener("click", (e) => {
  if (e.clientY < 80) {
    overlay.classList.remove("show");
    envelope.classList.remove("open");

    // OPCIONAL: detener música al cerrar
    music.pause();
  }
});

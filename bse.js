
const silentSoundDiv = document.getElementById("silentSoundDiv");
const silentIcon = document.getElementById("image");
const unsilentIcon = document.getElementById("unsilentIcon");
const audioPlayer = document.getElementById("audioPlayer");

function updateIcon() {
  if (audioPlayer.muted) {
    silentIcon.style.display = "block";
    unsilentIcon.style.display = "none";
  } else {
    silentIcon.style.display = "none";
    unsilentIcon.style.display = "block";
  }
}

audioPlayer.addEventListener("play", () => {
  silentSoundDiv.style.display = "flex";
  updateIcon();
});

silentSoundDiv.addEventListener("click", () => {
  audioPlayer.muted = !audioPlayer.muted;
  updateIcon();
});

if (!audioPlayer.paused) {
  silentSoundDiv.style.display = "flex";
  updateIcon();
}

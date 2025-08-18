const titles = [
  "Scribblings from the Walls of Eryx",
  "Zothique Whispers",
  "Funguous Decay",
  "Gibbering from the Antiquary",
  "Eldritch Fragments"
];

function randomTitle() {
  const title = titles[Math.floor(Math.random() * titles.length)];
  document.title = title;
  document.getElementById("title-display").textContent = title;
}

randomTitle();

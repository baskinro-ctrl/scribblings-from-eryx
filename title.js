const titles = [
  "Scribblings from the Walls of Eryx",
  "Whispers Beneath the Threshold",
  "The Lantern of the Grotesque",
  "Notes from the Crypt of Dreams",
  "Fragments of the Symbolic Abyss"
];

function randomTitle() {
  const title = titles[Math.floor(Math.random() * titles.length)];
  document.title = title;
  document.getElementById("title-display").textContent = title;
}

randomTitle();

function publishPost() {
  const title = document.getElementById("post-title").value;
  const date = document.getElementById("post-date").value;
  const body = document.getElementById("post-body").value;

  if (!title || !date || !body) {
    alert("All fields must be filled out.");
    return;
  }

  const article = document.createElement("article");
  article.innerHTML = `
    <h2>${title}</h2>
    <p><em>${date}</em></p>
    <p>${body.replace(/\n/g, "<br>")}</p>
  `;

  document.getElementById("blog-posts").prepend(article);

  // Optional: clear fields
  document.getElementById("post-title").value = "";
  document.getElementById("post-date").value = "";
  document.getElementById("post-body").value = "";
}

function saveDraft() {
  const draft = {
    title: document.getElementById("post-title").value,
    date: document.getElementById("post-date").value,
    body: document.getElementById("post-body").value
  };
  localStorage.setItem("blogDraft", JSON.stringify(draft));
  alert("Draft saved to your browser.");
}

function loadDraft() {
  const draft = JSON.parse(localStorage.getItem("blogDraft"));
  if (draft) {
    document.getElementById("post-title").value = draft.title;
    document.getElementById("post-date").value = draft.date;
    document.getElementById("post-body").value = draft.body;
    alert("Draft loaded.");
  } else {
    alert("No draft found.");
  }
}

function clearDraft() {
  localStorage.removeItem("blogDraft");
  alert("Draft cleared.");
}

function unlockEditor() {
  const password = document.getElementById("editor-password").value;
  if (password === "MikePump123") { // You can change this password
    document.getElementById("editor").style.display = "block";
    document.getElementById("editor-gate").style.display = "none";
  } else {
    alert("Incorrect password. The walls of Eryx remain sealed.");
  }
    window.unlockEditor = unlockEditor;
}
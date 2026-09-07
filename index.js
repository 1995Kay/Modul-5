let notizen = [];

const gespeicherteNotizen = localStorage.getItem("notizen");
if (gespeicherteNotizen) {
  notizen = JSON.parse(gespeicherteNotizen);
  console.log("Geladene Notizen beim Start:", notizen);
  renderNotes();
}

function saveNotiz() {
  const titelWert = document.getElementById("main-titel").value;
  const textWert = document.getElementById("main-text").value;

  if (titelWert === "" || textWert === "") {
    alert("Bitte fülle beide Felder aus!");
    return;
  }

  const neueNotiz = {
    id: Date.now(),
    title: titelWert,
    body: textWert,
  };

  notizen.push(neueNotiz);
  localStorage.setItem("notizen", JSON.stringify(notizen));

  document.getElementById("main-titel").value = "";
  document.getElementById("main-text").value = "";

  console.log("Aktuelle Liste nach Speichern:", notizen);
  renderNotes();
}

function renderNotes() {
  const listContainer = document.getElementById("notes-list");

  listContainer.innerHTML = "";

  notizen.forEach((notiz) => {
    const notizHTML = `
  <div class="note-card" onclick="loadNotiz(${notiz.id})">
    <h3>${notiz.title}</h3>
    <p>${notiz.body}</p>
  </div>
`;

    listContainer.innerHTML += notizHTML;
  });
}

function deleteNotiz() {
  if (aktuelleNotizId === null) {
    alert("Bitte wähle zuerst eine Notiz aus, die du löschen möchtest.");
    return;
  }

  notizen = notizen.filter((notiz) => notiz.id !== aktuelleNotizId);
  localStorage.setItem("notizen", JSON.stringify(notizen));

  document.getElementById("main-titel").value = "";
  document.getElementById("main-text").value = "";
  aktuelleNotizId = null;

  renderNotes();
}

function loadNotiz(id) {
  const gefundeneNotiz = notizen.find((notiz) => {
    return notiz.id === id;
  });

  document.getElementById("main-titel").value = gefundeneNotiz.title;
  document.getElementById("main-text").value = gefundeneNotiz.body;
}
function loadNotiz(id) {
  const gefundeneNotiz = notizen.find((notiz) => notiz.id === id);

  aktuelleNotizId = id;

  document.getElementById("main-titel").value = gefundeneNotiz.title;
  document.getElementById("main-text").value = gefundeneNotiz.body;
}
let aktuelleNotizId = null;

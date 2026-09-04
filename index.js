let notizen = [];

// 1. Beim Seitenstart prüfen, ob es schon Notizen im Speicher gibt
const gespeicherteNotizen = localStorage.getItem("notizen");
if (gespeicherteNotizen) {
  notizen = JSON.parse(gespeicherteNotizen);
  console.log("Geladene Notizen beim Start:", notizen);
}

function saveNotiz() {
  const titelWert = document.getElementById("main-titel").value;
  const textWert = document.getElementById("main-text").value;

  if (titelWert === "" || textWert === "") {
    alert("Bitte fülle beide Felder aus!");
    return;
  }

  // 2. Umbenannt zu neueNotiz, um Konflikte zu vermeiden
  const neueNotiz = {
    id: Date.now(),
    title: titelWert,
    body: textWert,
  };

  // 3. Diese Befehle sind jetzt SICHER innerhalb der Funktion
  notizen.push(neueNotiz);
  localStorage.setItem("notizen", JSON.stringify(notizen));

  document.getElementById("main-titel").value = "";
  document.getElementById("main-text").value = "";

  console.log("Aktuelle Liste nach Speichern:", notizen);
}

function deleteNotiz() {
  // Implement the delete functionality here
}

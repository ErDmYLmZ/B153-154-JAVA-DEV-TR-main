const notlar = [
  "Kitap oku.",
  "Yürüyüşe çık.",
  "Daily'e katıl.",
  "Taskini bitir.",
];

const liste = document.querySelector("#liste");

let satir = "";

for (let not of notlar) {
  satir += `<li>${not}</li>`;
}

liste.innerHTML = satir;

let yeni = document.querySelector("#yeni");

console.log(liste.lastElementChild);

document.querySelector("#ekle").addEventListener("click", () => {
  if (!yeni.value) {
    yeni.focus();
    return;
  }
  liste.innerHTML += `<li>${yeni.value}</li>`;
  notlar.push(yeni.value);
  sonuc(notlar);
  yeni.value = "";
  yeni.focus();
});

document.querySelector("#sil").addEventListener("click", () => {
  if (notlar.length === 0) {
    alert("Listede silinecek eleman kalmadı!");
  } else {
    yeni.value = "";
    notlar.pop();
    sonuc(notlar);
    liste.removeChild(liste.lastElementChild);
  }
});

const sonuc = (eklenen) => {
  if (notlar.length === 0) {
    document.querySelector(
      "#metin"
    ).innerHTML = `<b>Listede Eleman Kalmadı!</b>`;
  } else {
    document.querySelector("#metin").innerHTML = eklenen.join(" - ");
  }
};

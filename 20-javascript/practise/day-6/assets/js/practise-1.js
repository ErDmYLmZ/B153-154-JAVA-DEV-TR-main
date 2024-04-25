const karakterSay = () => {
  const sayac = document.querySelector(".sayac");
  const giris = document.querySelector("#giris");
  const resetBtn = document.querySelector("#sil");
  const mesaj = document.querySelector(".msj");

  setTimeout(() => {
    if (!giris.value) mesaj.innerHTML = "<b>Haydi Söyle</b>";
  }, 3000);

  giris.addEventListener("input", () => {
    mesaj.innerHTML = "";
    sayac.innerHTML = giris.value.length;
  });

  resetBtn.addEventListener("click", () => {
    sayac.innerHTML = "0";
    karakterSay();
  });
};

karakterSay();

const basliklar = document.querySelector(".basliklar");
console.log(basliklar);

const urunlerResim = document.querySelectorAll(".image");
console.log(urunlerResim);

basliklar.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("urun")) {
    basliklar.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const aranan = e.target.getAttribute("data-sec");
    console.log(aranan);
    urunlerResim.forEach((item) => {
      if (item.classList.contains(aranan)) item.style.display = "block";
      else item.style.display = "none";
    });
  }
});

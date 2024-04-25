const data = [
  {
    ad: "Aslı Yurt",
    yas: 29,
    sehir: "",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    meslek: "product owner",
  },
  {
    ad: "Demir Kurt",
    yas: 31,
    img: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    meslek: "Automation Engineer",
  },
  {
    ad: "Can Kara",
    yas: 25,
    img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    meslek: "Intern",
  },
  {
    ad: "Sara Duru",
    yas: 27,
    img: "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    meslek: "Web Developer",
  },
  {
    ad: "Suat Gök",
    yas: 32,
    img: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    meslek: "Web Designer",
  },
];

const baslik = document.querySelector("#baslik");
const yas = document.querySelector("#yas");
const meslek = document.getElementById("meslek");
const resim = document.querySelector("#resim");
const geri = document.querySelector("#geri");
const ileri = document.querySelector("#ileri");
const btn = document.querySelector("#btn");
const alt = document.querySelector(".alt");

let mode = true;

btn.addEventListener("click", () => {
  if (mode) {
    alt.style.display = "inline-block";
    btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    alt.style.display = "none";
    btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
  mode = !mode;
});

const kisiGetir = (index) => {
  let getir = data[index];
  baslik.innerText = getir.ad;
  yas.innerText = getir.yas;
  resim.src = getir.img;
  meslek.innerText = getir.meslek;
};

let objeIndex = 0;

ileri.addEventListener("click", () => {
  objeIndex++;
  if (objeIndex > data.length - 1) {
    objeIndex = 0;
  }
  kisiGetir(objeIndex);
});

geri.addEventListener("click", () => {
  objeIndex--;
  if (objeIndex < 0) {
    objeIndex = data.length - 1;
  }
  kisiGetir(objeIndex);
});

import { countries } from "../data/countries.js";

let timeout = null;

const filterData = (val) => {
  if (!val) return [];

  const filteredData = countries.filter((country) =>
    country.name.common.toLowerCase().includes(val.toLowerCase())
  );

  return filteredData;
};

const setResultList = (items) => {
  const results = document.getElementById("results");
  results.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item.name.common;
    results.appendChild(li);
  });
};

document.getElementById("txtSearch").addEventListener("input", (e) => {
  
  if (timeout) clearTimeout(timeout);


  timeout = setTimeout(() => {
    const filteredData = filterData(e.target.value);
    setResultList(filteredData);

    console.log(filteredData);
  }, 500);
});

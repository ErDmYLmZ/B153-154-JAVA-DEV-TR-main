import { countries } from "../data/countries.js";

document.querySelector("#ddlCountries").addEventListener("change", (e) => {
  const countryCode = e.target.value;
  const country = getCountry(countryCode);
  loadTable(country);
  showTable();
});

const loadData = () => {
  let options = '<option value="" disabled selected>Choose one</option>';
  for (let country of countries) {
    options += `<option value="${country.ccn3}">${country.name.common}</option>`;
  }

  const ddlCountries = document.querySelector("#ddlCountries");
  ddlCountries.innerHTML = options;
};

const loadTable = (country) => {
  const capitalCity = country.capital.join(" - ");
  const currencies = Object.keys(country.currencies).join(" - ");
  const languages = Object.values(country.languages).join(" - ");
  const area = country.area;
  const mapLink = `<a href="http://www.google.com/maps/place/${country.latlng.toString()}" target="_blank">Go to map</a>`;

  document.querySelector("#tblCountry tr:nth-child(1) td").innerHTML =
    capitalCity;
  document.querySelector("#tblCountry tr:nth-child(2) td").innerHTML =
    currencies;
  document.querySelector("#tblCountry tr:nth-child(3) td").innerHTML =
    languages;
  document.querySelector(
    "#tblCountry tr:nth-child(4) td"
  ).innerHTML = `${area} km<sup>2</sup>`;
  document.querySelector("#tblCountry tr:nth-child(5) td").innerHTML = mapLink;
};

const showTable = () => {
  document.querySelector("#tblCountry").classList.remove("d-none");
};

const getCountry = (countryCode) => {
  const filteredCountries = countries.filter(
    (country) => country.ccn3 === countryCode
  );
  return filteredCountries.length > 0 ? filteredCountries[0] : null;
};

const setTotalArea = (area) => {
  document.querySelector("#totalArea").innerHTML = `${area.toFixed(2)} km<sup>2</sup>`;
};

const getTotalArea = () => {
  const totalArea = countries.reduce(
    (total, country) => total + country.area,
    0
  );
  return totalArea;
};

loadData();
const totalArea = getTotalArea();
setTotalArea(totalArea);

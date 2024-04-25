import React from "react";
import countries from "./countries.json";

const Ulkeler = () => {
  const stil = {
    textAlign: "center",
    backgroundColor: "lightblue",
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Sıra No</th>
          <th>Ülke Adı</th>
          <th>Ülke Kodu</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <tr
            key={index}
            style={
              (index + 1) % 2 === 0
                ? stil
                : { ...stil, backgroundColor: "lightgray" }
            }
          >
            <td>{index + 1}</td>
            <td>{country.name}</td>
            <td>{country.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Ulkeler;

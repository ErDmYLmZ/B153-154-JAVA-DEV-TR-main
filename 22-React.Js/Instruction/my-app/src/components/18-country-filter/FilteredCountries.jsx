import React, { useEffect, useState } from "react";
import countries from "../../assets/data/countries.json";
import { Form, Table } from "react-bootstrap";

const FilteredCountries = () => {
  const [ulke, setUlke] = useState(countries);
  const [searchBox, setSearchBox] = useState("");

  useEffect(()=>{
let filteredCountries= countries.filter((item)=>item.name.toLocaleLowerCase().includes(searchBox.toLowerCase()))

setUlke(filteredCountries)

  },[searchBox])
  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Filtreleme yap"
        className="m-3 bg-info w-100 text-center p-3 fs-3"
        onChange={(e)=>setSearchBox(e.target.value)}
      />

      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{
          textAlign: "center",
          cursor: "pointer",
          width: "50rem",
          margin: "1rem auto",
        }}
      >
        <thead>
          <tr>
            <th>Ulke No</th>
            <th>Ulke Adi</th>
            <th>Ulke Kodu</th>
          </tr>
        </thead>
        <tbody>
          {ulke.map((item, index) => (
            <tr key={item.code}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.code}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FilteredCountries;

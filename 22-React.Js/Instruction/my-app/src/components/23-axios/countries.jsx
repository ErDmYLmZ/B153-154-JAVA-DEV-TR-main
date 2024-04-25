import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const loadCountries = async (second) => {
    try {
      const resp = await axios.get("https://restcountries.com/v3.1/all");
      const data = resp.data;
      setCountries(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <Container className="mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Flag</th>
            <th>Country</th>
            <th>Population</th>
            <th>Capital City</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={country.name}>
              <td>{index+1}</td>
              <td><img src={country.flags.png}  width="150" alt={country.name}/></td>
              <td>{country.name.common}</td>
              <td>{country.population}</td>
              <td>{country.capital?.join("-")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Countries;

import React, { useEffect, useState } from "react";
import data from "./data.json";
import { Container, Spinner, Table } from "react-bootstrap";
import Country from "./country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  /*   
1.yol => browser veya sayfa kapatıldığında (componentWillUnmount())
useEffect(() => {
    return () => {
        setTime(60);
    };
  }, []); 
*/

  /*  
2.yol => dizi kısmına koyduğumuz state güncellendiğinde çalışır (componentDidUpdate())
useEffect(() => {
}, [countries]);  
*/

  // 3.yol => sayfa ilk yüklendiğinde (componentWillMount())
  useEffect(() => {
    setCountries(data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const removeByCcn3 = (ccn3) => {
    const isDelete = window.confirm("Silmek istediğinize emin misinz ?");
    if (isDelete) {
      const newArr = countries.filter((country) => country.ccn3 !== ccn3);
      setCountries(newArr);
    }
  };

  useEffect(() => {
    if (search === "") {
      setCountries(data);
    }
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (search) {
      const newArr = countries.filter((country) =>
        country.name.common
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      );
      setCountries(newArr);
    }
  };

  return (
    <Container className="mt-5">
      <div className="mb-2 d-flex justify-content-end">
        <input type="text" onChange={(e) => handleSearch(e)} />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Bayrak</th>
            <th>Ülke</th>
            <th>Nüfus</th>
            <th>Başkent</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td className={`text-center`} colSpan="6">
                <Spinner animation="border" />
              </td>
            </tr>
          ) : (
            countries.map((country, index) => (
              <Country
                key={index}
                index={index}
                {...country}
                removeByCcn3={removeByCcn3}
              />
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Countries;

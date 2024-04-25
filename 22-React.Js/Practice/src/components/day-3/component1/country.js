import React from "react";
import { Button } from "react-bootstrap";

const Country = ({
  flags,
  name,
  population,
  capital,
  ccn3,
  index,
  removeByCcn3,
}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img
          src={flags.png}
          alt="flags"
          className="img-fluid"
          width={"100px"}
        />
      </td>
      <td>{name.common}</td>
      <td>{population}</td>
      <td>{capital}</td>
      <td>
        <Button
          variant="danger"
          className="mb-3"
          onClick={() => removeByCcn3(ccn3)}
        >
          Sil
        </Button>
      </td>
    </tr>
  );
};

export default Country;

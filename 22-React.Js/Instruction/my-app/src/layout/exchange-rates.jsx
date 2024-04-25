import React, { useContext } from "react";
import StoreContext from "../store";
import { Badge } from "react-bootstrap";

const ExchangeRates = () => {
  const store = useContext(StoreContext);
  const { currencies } = store;

  const getRate = (currency) => {
    const rate = (1 / currencies[currency]).toFixed(2);
    return `${currency}: ${rate}₺`;
  };

  return (
    <div className="mt-2">
      <Badge bg="primary">{getRate("EUR")}</Badge>
      <Badge bg="danger" className="ms-2">
        {getRate("USD")}
      </Badge>
    </div>
  );
};

export default ExchangeRates;

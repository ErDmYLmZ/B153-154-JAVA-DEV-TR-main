import React, { useContext, useEffect, useState } from "react";
import StoreContext from "../../store";
import { Container, Form, InputGroup } from "react-bootstrap";

const Exchange = () => {
  const store = useContext(StoreContext);
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState()
  const { currencies } = store;


  useEffect(() => {
    const val = (amount / currencies[currency]).toFixed(2);
    setResult(val);

  }, [amount, currency])
  


  return (
    <Container>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Type amount"
          aria-label="Type amount"
          aria-describedby="basic-addon1"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
        />

        <Form.Select
          aria-label="Default select example"
          onChange={(e)=>setCurrency(e.target.value)} value={currency}
        >
          <option disabled>
            Currency
          </option>
          {Object.keys(currencies).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>

        <InputGroup.Text id="basic-addon1">Result: {result}₺</InputGroup.Text>
      </InputGroup>
    </Container>
  );
};

export default Exchange;

import React, { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import StoreContext from "../../store";

const Counter = () => {
  const store = useContext(StoreContext);
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="secondary"
          onClick={() => store.setCounter((prev) => prev - 1)}
        >
          -
        </Button>
        <Button variant="secondary" disabled>
          {store.counter}
        </Button>
        <Button
          variant="secondary"
          onClick={() => store.setCounter((prev) => prev + 1)}
        >
          +
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;

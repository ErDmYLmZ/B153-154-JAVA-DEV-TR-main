import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useStore } from "../../store";
import { counterDown, counterUp } from "../../store/counter/counter-actions";

const Counter = () => {
  const { counterState, dispatchCounter } = useStore();

  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick={() => dispatchCounter(counterDown(1))}>-</Button>
      <Button variant="secondary" disabled>
        {counterState.counter}
      </Button>
      <Button
        variant="secondary"
        onClick={() => dispatchCounter(counterUp(1))}
      >
        +
      </Button>
    </ButtonGroup>
  );
};

export default Counter;

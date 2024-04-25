import React, { useRef } from "react";
import { Container } from "react-bootstrap";

const UseRefHooku = () => {
  const inputRef = useRef(null);

  const btnRef = useRef(null);

  const setFocus = () => {
    /* 
  eski usul js kullanimi
  const ElInput= document.getElementById("inputEl")
   ElInput.style.backgroundColor="hotpink"
   ElInput.focus() */

    inputRef.current.style.backgroundColor = "hotpink";
    inputRef.current.style.color = "blue";
  };

  const changeBtn = () => {
    btnRef.current.style.backgroundColor = "green";
  };

  return (
    <Container className="m-5">
      <div className="d-flex justify-content-center gap-5">
        <input type="text" ref={inputRef} />
        <button onClick={setFocus}>UseRef</button>
        <button onClick={changeBtn} ref={btnRef}>
          Change Button
        </button>
      </div>
    </Container>
  );
};

export default UseRefHooku;

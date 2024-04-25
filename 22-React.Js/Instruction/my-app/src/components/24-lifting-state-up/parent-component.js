import React from "react";
import { useState } from "react";
import ChildComponent1 from "./child-component1";
import ChildComponent2 from "./child-component2";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => { 
    if(counter>=100) return;
    setCounter(prev=> prev+1);
   }


  return (
    <div>
      <h1>PARENT</h1>
      <ChildComponent1 handleCounter={handleCounter}/>
      <ChildComponent2 counter={counter} />
    </div>
  );
};

export default ParentComponent;

import React, { useState } from "react";

const Form1 = () => {
  const [userName, setUserName] = useState("Scott");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if(!userName || userName.length<3){
        alert("Enter a valid user name");
        return;
    }

    alert("Form submit is successful")

   }

  return (
    <div>
      <form
        action="https://exmaple.com"
        method="get"
        onSubmit={handleSubmit}
      >
        <label htmlFor="userName">User Name</label>
        <br />
        <input
          type="text"
          name="userName"
          id="userName"
          value={userName}
          onChange={handleUserName}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form1;

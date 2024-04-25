import React, { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import StoreContext from "./store";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StoreContext.Provider value={{ setIsMenuOpen, isMenuOpen }}>
      <Header />
      <Main />
    </StoreContext.Provider>
  );
};

export default App;

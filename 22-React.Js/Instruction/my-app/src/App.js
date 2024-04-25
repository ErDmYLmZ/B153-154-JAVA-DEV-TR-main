import AppRouterProvider from "./router";
import "./App.css";
import StoreContext from "./store";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [counter, setCounter] = useState(100);
  const [currencies, setCurrencies] = useState(null);

  const loadData = async () => { 
    try {
      const resp = await axios.get("https://api.frankfurter.app/latest?from=try");
      const data = resp.data;

      setCurrencies(data.rates);

    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    loadData();
  }, [])
  

  if(!currencies) return null;

  const sharedData = {counter, setCounter, currencies}

  return (
    <StoreContext.Provider value={sharedData}>
      <AppRouterProvider />
    </StoreContext.Provider>
  );
};


export default App;

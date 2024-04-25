import { createContext, useContext, useReducer } from "react";
import { counterReducer } from "./counter/counter-reducer";
import { counterInitialState } from "./counter/counter-initial-state";
import { authReducer } from "./auth/auth-reducer";
import { authInitialState } from "./auth/auth-initial-state";

// Boş bir merkezi state oluştuurldu
const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
  // useReducer hook u reducer ve initial state lerimizi parametre olarak alır
  // Ve bize geriye setter ve getter fonksiyonlarını döndürür.

  //        getter           setter  
  const [counterState, dispatchCounter] = useReducer(
    counterReducer,
    counterInitialState
  );

  const [authState, dispatchAuth] = useReducer(authReducer, authInitialState);



  return (
    <StoreContext.Provider value={{ counterState, dispatchCounter, authState, dispatchAuth }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

import { createContext, useContext } from "react";

// Boş bir merkezi state oluşturuldu
const StoreContext = createContext();

// Merkezi state dışarıya açıldı
export default StoreContext;

export const useStore = () => useContext(StoreContext);


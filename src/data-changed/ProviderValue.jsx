import { createContext, useState } from "react";
export const contextValue = createContext();
const ProviderValue = ({ children }) => {
  const [value, setValue] = useState("Local");
  return (
    <contextValue.Provider value={{value,setValue}}>{children}</contextValue.Provider>
  );
};

export default ProviderValue;

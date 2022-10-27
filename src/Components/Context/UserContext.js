import { createContext, useState, values } from "react";

const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [token, setToken] = useState(null);
  const [afterLogin, setAfterLogin] = useState(false);
  values = { setAfterLogin, setToken, token };

  return (
    <TokenContext.Provider value={values}>{children}</TokenContext.Provider>
  );
}
export { TokenContext };

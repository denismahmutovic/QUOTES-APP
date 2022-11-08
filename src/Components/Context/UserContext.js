import { createContext, useState, values } from "react";
import axios from "axios";

const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [quoteArray, setQuoteArray] = useState([]);
  const [token, setToken] = useState(null);
  const [afterLogin, setAfterLogin] = useState(false);
  const [sortTags, setSortTags] = useState([]);
  const [tags, setTag] = useState([]);

  const getQuotes = () => {
    axios
      .get(`http://localhost:8000/quotes?tags=${sortTags}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(({ data }) => {
        console.log(data.quotes);
        setQuoteArray(data.quotes);
      });
  };

  values = {
    setAfterLogin,
    setToken,
    token,
    getQuotes,
    quoteArray,
    sortTags,
    setSortTags,
    tags,
  };

  return (
    <TokenContext.Provider value={values}>{children}</TokenContext.Provider>
  );
}
export { TokenContext };

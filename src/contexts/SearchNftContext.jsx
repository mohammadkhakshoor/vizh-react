import { createContext, useContext, useState } from "react";
const searchQuery = createContext();

const SeachNftProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  function handleSearchQuery(text) {
    setQuery(text);
  }
  return (
    <searchQuery.Provider value={{ query, handleSearchQuery }}>
      {children}
    </searchQuery.Provider>
  );
};

function useSearchQuery() {
  const context = useContext(searchQuery);
  if (context === undefined)
    throw new Error("fake data used outside of the Provider");
  return context;
}
export { useSearchQuery, SeachNftProvider };

import React, { createContext, useContext, useState } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const cocktailContext = createContext();

export function ContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  return (
    <cocktailContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </cocktailContext.Provider>
  );
}

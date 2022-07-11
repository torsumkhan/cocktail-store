import React, { useContext } from "react";
import { cocktailContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useContext(cocktailContext);
  return (
    <div className="search">
      <h1>SearchForm components</h1>
    </div>
  );
};

export default SearchForm;

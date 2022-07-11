import React, { useContext, useEffect, useRef } from "react";
import { cocktailContext } from "../context";
import "./search.css";

const SearchForm = () => {
  const { setSearchTerm } = useContext(cocktailContext);
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-bar">
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Search:</label>
        <input
          type="text"
          id="name"
          required
          ref={searchValue}
          onChange={() => setSearchTerm(searchValue.current.value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;

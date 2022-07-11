import React, { useContext } from "react";
import { cocktailContext } from "../context";
import Loading from "./Loading";

const CocktailList = () => {
  const { loading, cocktails } = useContext(cocktailContext);

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2>No match found</h2>;
  }
  return (
    <div className="search">
      <h2>Cocktail List components</h2>
    </div>
  );
};

export default CocktailList;

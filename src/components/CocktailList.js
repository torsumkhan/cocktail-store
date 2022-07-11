import React, { useContext } from "react";
import { cocktailContext } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
import "./cocktaillist.css";

const CocktailList = () => {
  const { loading, cocktails } = useContext(cocktailContext);

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2>No match found</h2>;
  }
  return (
    <div>
      <h1>Cocktail List</h1>
      <div className="cocktail-list">
        {cocktails.map((cocktail) => {
          return (
            <div key={cocktail.id}>
              <Cocktail {...cocktail} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CocktailList;

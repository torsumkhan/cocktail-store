import React from "react";
import SearchForm from "../../components/SearchForm";
import CocktailList from "../../components/CocktailList";
import "./home.css";

const Home = () => {
  return (
    <div className="main-container">
      <SearchForm />
      <h1>🍸</h1>
      <CocktailList />
    </div>
  );
};

export default Home;

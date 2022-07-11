import React from "react";
import SearchForm from "../../components/SearchForm";
import CocktailList from "../../components/CocktailList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;

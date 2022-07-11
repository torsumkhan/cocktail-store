import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import { useParams, Link } from "react-router-dom";
import "./single.css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchCocktail = async () => {
    setLoading(true);
    try {
      const respone = await fetch(`${url}${id}`);
      const data = await respone.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
        } = data.drinks[0];
        const ingredients = [strIngredient1, strIngredient2, strIngredient3];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2>No cocktail</h2>;
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;
  return (
    <div className="main">
      <Link to="/">
        <h2>MAIN PAGE</h2>
      </Link>
      <div className="cocktail-container">
        <div className="info-cont">
          <img src={image} alt={image} />
        </div>
        <div className="drink">
          <p>
            <span className="span">Name:</span>
            {name}
          </p>
          <p>
            <span className="span">Category:</span>
            {category}
          </p>
          <p>
            <span className="span">Info:</span>
            {info}
          </p>
          <p>
            <span className="span">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="span">Instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="span">Ingredients:</span>
            {ingredients.map((ing, index) => {
              return ing ? <span key={index}>{ing}</span> : null;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;

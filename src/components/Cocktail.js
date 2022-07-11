import React from "react";
import { Link } from "react-router-dom";
import "./cocktail.css";

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <div className="cocktail-card">
      <img classname="cocktail-img" src={image} alt={name} />
      <div className="cocktail-info">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>Details</Link>
      </div>
    </div>
  );
};

export default Cocktail;

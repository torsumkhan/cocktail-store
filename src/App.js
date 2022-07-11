//imports
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import css
import "./app.css";

//import pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SingleCocktail from "./pages/Single/SingleCocktail";
import Error from "./pages/Error/Error";
import Contact from "./pages/Contact/Contact";

//import components
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cocktail/:id" component={SingleCocktail} />
          <Route path="/contact" component={Contact} />
          <Route path="/error" component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

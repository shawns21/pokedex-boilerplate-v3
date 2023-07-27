import React from "react";
import PokemonList from "./PokemonList";

const Main = () => {
  return (
    <div id="main" className="row container">
      <h1>Pokedex</h1>
      <PokemonList />
    </div>
  );
};

export default Main;

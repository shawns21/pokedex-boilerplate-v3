import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const { data } = await axios.get("/api/pokemon");
      console.log(data);
      setPokemons(data);
    }

    fetchPokemon();
  }, []);

  return (
    <div id="main">
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li>
            {pokemon.name} | {pokemon.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;

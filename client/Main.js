import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonList = () => {

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
        {pokemons.map((pokemon) => 
        <div class="pokemon-item">
            <img src={pokemon.imageUrl}/>
            <p>{pokemon.name}</p>
            <p>
              <small>(Trained by {pokemon.trainer})</small>
            </p>
            <small class="pokemon-info">
              Type: {pokemon.type}
            </small>
          </div>
        )}
    </div>
  );
};

const TrainerList = () => {

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    async function fetchTrainers() {
      const { data } = await axios.get("/api/trainer");
      console.log(data);
      setTrainers(data);
    }

    fetchTrainers();
  }, []);

  return (
    <div id="main">
      <h1>Trainer List</h1>
        {trainers.map((trainer) => 
        <div class="pokemon-item">
            <img src={trainer.imageUrl}/>
            <p>{trainer.firstName}</p>
            <p>
              <small>(Pokemon team: )</small>
            </p>
          </div>
        )}
    </div>
  );
};

export {PokemonList, TrainerList};

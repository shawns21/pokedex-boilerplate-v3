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
      <h1>Pokemon List</h1>
        {pokemons.map((pokemon) => 
        <div class="pokemon-item">
            <img src={pokemon.imageUrl}/>
            <p>{pokemon.name}</p>
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
          </div>
        )}
    </div>
  );
};

const PikachuBio = () => {

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const { data } = await axios.get("/api/pokemon/1");
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <div id="main">
      <h1>Pikachu Bio</h1>
      {pokemon && (
        <div className="pokemon-item">
          <img src={pokemon.imageUrl}/>
          <p>{pokemon.name}</p>
          <p>Type: {pokemon.type}</p>
          <p>Trainer: {pokemon.trainer.firstName} {pokemon.trainer.lastName}</p>
          <img src={pokemon.trainer.imageUrl}></img>
          <p>Date caught: {pokemon.date}</p>
        </div>
      )}
    </div>
  );
};

const AshBio = () => {

  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    async function fetchTrainer() {
      try {
        const { data } = await axios.get("/api/trainer/1");
        setTrainer(data);
      } catch (error) {
        console.error("Error fetching Trainer:", error);
      }
    }

    fetchTrainer();
  }, []);

  return (
    <div id="main">
      <h1>Ash Bio</h1>
      {trainer && (
        <div className="pokemon-item">
          <img src={trainer.imageUrl}/>
          <p>{trainer.firstName} {trainer.lastName}</p>
          <p>Team: </p>
          {trainer.pokemons.map(pokemon => (
            <div>
              <p>{pokemon.name}</p>
              <img src={pokemon.imageUrl}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export {PokemonList, TrainerList, PikachuBio, AshBio};

import React, { useEffect, useState } from "react";
import axios from "axios";

function PokemonDetail({ id }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return pokemon ? (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  ) : null;
}

export default PokemonDetail;
